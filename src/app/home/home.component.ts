import 'rxjs/add/operator/finally';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GithubService} from '../core/github.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
// import {Subscription} from 'rxjs/Subscription';

import {single, multi} from './data';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    //

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
            icon: 'code',
            subtext: 'size in Kb'
        }
    ];

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
            // .finally(() => {
            // })
            .subscribe(results => {
                // console.log(results);
                this.loadData(results[0], results[1]);
            }, err => {
                console.log(err);
            });


        // this.subscriber = this.githubService.repoName$
        //     .subscribe(data => {
        //         this.repoName = data;
        //         this.loadData();
        //     });


        // this.githubService
        //     .getUsers()
        //     .finally(() => {
        //         this.isLoading = false;
        //     })
        //     .subscribe(res => {
        //         this.users = res;
        //     }, err => {
        //         console.log(err);
        //     });

    }

    onSelect(event: any) {
        console.log(event);
    }

    loadData(useRealData: boolean, repoName?: string) {
        Observable
            .forkJoin([
                this.githubService.getFounder(),
                this.githubService.getUsers(),
                this.githubService.getParticipation(),
                this.githubService.getLanguages(),
                this.githubService.getContributors(),
                this.githubService.getRepoInfo(useRealData, repoName)
            ])
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe(results => {
                this.founder = results[0];
                this.users = results[1];
                results[2].all.map((obj: any, idx: number) =>
                    this.commits[0].series.push({
                        'name': idx + 1,
                        'value': obj
                    }));
                Object.keys(results[3]).map(
                    (obj, idx) => this.languages.push(
                        {'name': obj, 'value': results[3][obj]}
                    )
                );
                results[4].map(
                    (obj: any, idx: number) => {
                        if (idx < 10) {
                            this.contributors.push(
                                {'name': obj.login, 'value': obj.contributions}
                            )
                        }
                    }
                );
                // this.totalContributors = results[4].length;
                this.repoInfo = results[5];
                this.folders[0].text = this.repoInfo.stargazers_count.toLocaleString();
                this.folders[1].text = this.repoInfo.forks.toLocaleString();
                this.folders[2].text = this.repoInfo.open_issues.toLocaleString();
                this.folders[3].text = this.repoInfo.size.toLocaleString();
            }, err => {
                console.log(err);
            });
    }

}
