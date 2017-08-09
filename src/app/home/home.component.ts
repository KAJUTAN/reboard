import 'rxjs/add/operator/finally';
import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {GithubService} from '../core/github.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

// import {BaseChartComponent} from '@swimlane/ngx-charts';

import {single, multi} from './data';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

    // private text: string;
    // subscriber: Subscription;

    // repoName: string;
    users: any;
    founder: any;
    isLoading: boolean;
    // TODO: Use an interface here
    commits: any[] = [
        {
            'name': 'Commits',
            'series': []
        }
    ];
    languages: any[] = [];
    contributors: any[] = [];
    // totalContributors: any;
    repoInfo: any;

    // = {
    //     'stargazers_count': 0
    // };

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = true;
    showLegend = true;
    legendTitle = '';
    showXAxisLabel = true;
    xAxisLabel = 'Week';
    showYAxisLabel = true;
    yAxisLabel = 'Commits';

    colorScheme = {
        domain: ['#FE7675', '#2095F2', '#4DAE4E', '#FE9900']
    };

    // line, area
    autoScale = true;

    folders: any[] = [
        {
            text: 0,
            icon: 'star',
            subtext: 'stargazers'
        },
        {
            text: 0,
            icon: 'content_copy',
            subtext: 'forks'
        },
        {
            text: 0,
            icon: 'bug_report',
            subtext: 'open issues'
        },
        {
            text: 0,
            icon: 'rss_feed',
            subtext: 'subscribers'
        }
    ];


    // @ViewChild(BaseChartComponent) private _chart: any;

    constructor(private githubService: GithubService) {
        Object.assign(this, {single, multi});
    }

    ngOnInit() {
        this.isLoading = true;
        this.loadData(false);

        Observable
            .combineLatest([
                this.githubService.useRealData$,
                this.githubService.repoName$
            ])
            .subscribe(results => {
                // console.log(results);
                this.loadData(results[0], results[1]);
            }, err => {
                console.log(err);
            });

    }

    onSelect(event: any) {
        console.log(event);
    }

    loadData(useRealData: boolean, repoName?: string) {

        const newCommits: any = [
            {
                'name': 'Commits',
                'series': []
            }
        ];

        const newLanguages: any = [];
        const contributors: Array<any> = [];

        Observable
            .forkJoin([
                this.githubService.getParticipation(useRealData, repoName),
                this.githubService.getLanguages(useRealData, repoName),
                this.githubService.getContributors(useRealData, repoName),
                this.githubService.getRepoInfo(useRealData, repoName)
            ])
            .finally(() => {
                this.isLoading = false;
                // this._chart.ngOnChanges();
            })
            .subscribe(results => {
                results[0].all.map((obj: any, idx: number) =>
                    newCommits[0].series.push({
                        'name': idx + 1,
                        'value': obj
                    }));
                this.commits = newCommits;
                Object.keys(results[1]).map(
                    (obj, idx) => newLanguages.push(
                        {'name': obj, 'value': results[1][obj]}
                    )
                );
                this.languages = newLanguages;
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
                this.repoInfo = results[3];
                this.folders[0].text = this.repoInfo.stargazers_count.toLocaleString();
                this.folders[1].text = this.repoInfo.forks.toLocaleString();
                this.folders[2].text = this.repoInfo.open_issues.toLocaleString();
                this.folders[3].text = this.repoInfo.subscribers_count.toLocaleString();
            }, err => {
                console.log(err);
            });

    }

}
