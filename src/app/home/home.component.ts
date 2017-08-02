import 'rxjs/add/operator/finally';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GithubService} from '../core/github.service';
import {Guser} from '../core/models/guser.model';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

import {single, multi} from './data';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    users: Guser[];
    founder: Guser; //TODO: Don't like this
    isLoading: boolean;

    //
    single: any[];
    multi: any[];
    view: any[]; //= [700, 400];
    //

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    // line, area
    autoScale = true;

    constructor(private githubService: GithubService) {
        Object.assign(this, {single, multi});
    }

    ngOnInit() {
        this.isLoading = true;

        Observable
            .forkJoin([
                this.githubService.getFounder(),
                this.githubService.getUsers()
            ])
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe(results => {
                this.founder = results[0];
                this.users = results[1];
            }, err => {
                console.log(err);
            });



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

}
