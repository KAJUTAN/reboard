import 'rxjs/add/operator/finally';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GithubService} from '../core/github.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

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
        Observable
            .forkJoin([
                this.githubService.getIssues('open'),
                this.githubService.getIssues('closed')
            ])
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe(results => {
                this.openIssues = results[0];
                this.closedIssues = results[1];
            })

        // this.githubService.getIssues('open')
        //     .finally(() => {
        //       this.isLoading = false;
        //     })
        //     // .subscribe((quote: string) => { this.quote = quote; });
        //     .subscribe(res => {
        //       this.openIssues = res
        //     }, err => {
        //       console.log(err)
        //     });
    }

}
