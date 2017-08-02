import {Component, OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MdSidenav} from '@angular/material';
import {Observable} from 'rxjs/Rx' ;

@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss']
})

export class ShellComponent implements OnInit {

    @ViewChild('sidenav') sidenav: MdSidenav;
    navIsVisible: boolean;

    mainLinks: Array<Object> = [
        {
            name: 'Home',
            icon: 'home',
            path: '/home'
        },
        {
            name: 'Favorites',
            icon: 'star',
            path: '/favorites'
        }
    ];

    subLinks: Array<Object> = [
        {
            name: 'Settings',
            icon: 'settings'
        },
        {
            name: 'Help',
            icon: 'help'
        },
        {
            name: 'About',
            icon: 'feedback'
        }
    ];

    constructor() {
    }

    ngOnInit() {
        Observable.fromEvent(window, 'resize')
            // .debounceTime(100)
            .subscribe((event) => {
                this.checkNav(event);
            });
        if (window.innerWidth > 1490) {
            this.navIsVisible = true;
        }
    }

    private checkNav(e: any) {
        if (e.target.innerWidth > 1490) {
            this.navIsVisible = true;
            return;
        }
        this.navIsVisible = false;
    }

}
