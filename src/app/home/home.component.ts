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
    // view: any[] = [undefined, undefined];
    view: any;
    //

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = true;
    showLegend = true;
    legendTitle = '';
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';


    // red: FE7675
    // blue: 2DABE5
    // orange: FFC36D
    // green: 54E69D

    colorScheme = {
        domain: ['#FE7675', '#2095F2', '#4DAE4E', '#FE9900']
    };

    // line, area
    autoScale = true;

    folders = [
        {
            name: 'Photos',
            updated: new Date('1/1/16'),
        },
        {
            name: 'Recipes',
            updated: new Date('1/17/16'),
        },
        {
            name: 'Work',
            updated: new Date('1/28/16'),
        }
    ];

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
