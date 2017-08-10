import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GithubService} from '../core/github.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/finally';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

    isLoading: boolean;
    commits: any[];
    languages: any[];
    contributors: any[];

    // charts options
    xAxisLabel = 'Week';
    yAxisLabel = 'Commits';
    colorScheme = {
        domain: ['#FE7675', '#2095F2', '#4DAE4E', '#FE9900']
    };

    // Stats widget
    stats: any[] = [
        {
            value: 0,
            text: 'stargazers',
            icon: 'star',
            color: 'red'
        },
        {
            value: 0,
            text: 'forks',
            icon: 'content_copy',
            color: 'blue'
        },
        {
            value: 0,
            text: 'open issues',
            icon: 'bug_report',
            color: 'orange'
        },
        {
            value: 0,
            text: 'subscribers',
            icon: 'rss_feed',
            color: 'green'
        }
    ];

    constructor(private githubService: GithubService) {}

    ngOnInit() {
        this.isLoading = true;
        this.loadData(false);
        Observable
            .combineLatest([
                this.githubService.useRealData$,
                this.githubService.repoName$
            ])
            .subscribe(([useRealData, repoName]) => {
                this.loadData(useRealData, repoName);
            }, err => {
                console.log(err);
            });
    }

    // Load data for dashboard
    loadData(useRealData: boolean, repoName?: string) {

        const commits: any[] = [{'name': 'Commits', 'series': []}];
        const languages: any = [];
        const contributors: Array<any> = [];

        Observable
            .forkJoin([
                this.githubService.getCommits(useRealData, repoName),
                this.githubService.getLanguages(useRealData, repoName),
                this.githubService.getContributors(useRealData, repoName),
                this.githubService.getRepoInfo(useRealData, repoName)
            ])
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe(results => {
                // Prepare data for contributions chart
                results[0].map((obj: any, idx: number) =>
                    commits[0].series.push({
                        'name': idx + 1,
                        'value': obj
                    }));
                this.commits = commits;
                // Prepare data for languages chart
                Object.keys(results[1]).map(
                    (obj, idx) => languages.push(
                        {'name': obj, 'value': results[1][obj]}
                    )
                );
                this.languages = languages;
                // Prepare data for top contributors chart
                results[2].map(
                    (obj: any, idx: number) => {
                        if (idx < 10) {
                            contributors.push(
                                {'name': obj.login, 'value': obj.contributions}
                            )
                        }
                    }
                );
                this.contributors = contributors;
                // Prepare data for statistics card
                this.stats[0].value = results[3].stargazers_count.toLocaleString();
                this.stats[1].value = results[3].forks.toLocaleString();
                this.stats[2].value = results[3].open_issues.toLocaleString();
                this.stats[3].value = results[3].subscribers_count.toLocaleString();

            }, err => {
                console.log(err);
            });

    }

    // ngx-charts on select event
    onSelect(event: any) {
        console.log(event);
    }

}
