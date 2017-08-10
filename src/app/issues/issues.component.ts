import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GithubService} from '../core/github.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/finally';

@Component({
    selector: 'app-issues',
    templateUrl: './issues.component.html',
    styleUrls: ['./issues.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class IssuesComponent implements OnInit {

    openIssues: any[];
    closedIssues: any[];
    isLoading: boolean;

    constructor(private githubService: GithubService) {
    }

    ngOnInit() {
        this.isLoading = true;
        // Load data for dashboard
        this.loadData(false);
        // Subscribe to changes happened within settings modal (use of real data and repo name)
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

    // Load data for issues
    loadData(useRealData: boolean, repoName?: string) {
        Observable
            .forkJoin([
                this.githubService.getIssues(useRealData, repoName, 'open'),
                this.githubService.getIssues(useRealData, repoName, 'closed')
            ])
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe(results => {
                this.openIssues = results[0];
                this.closedIssues = results[1];
            })
    }

}
