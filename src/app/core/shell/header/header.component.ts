import {Component, OnInit, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {I18nService} from '../../i18n.service';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    @Input() sidenav: any;
    pageTitle: String;

    constructor(private i18nService: I18nService,
                private snackBar: MdSnackBar,
                private titleService: Title) {
    }

    ngOnInit() {
        this.pageTitle = this.titleService.getTitle();
    }

    toggleNav() {
        this.sidenav.toggle()
    }

    // setLanguage(language: string) {
    //     this.i18nService.language = language;
    // }
    //
    // get currentLanguage(): string {
    //     return this.i18nService.language;
    // }
    //
    // get languages(): string[] {
    //     return this.i18nService.supportedLanguages;
    // }

    openSnackBar() {
        // this.snackBar.openFromComponent(PlayerComponent);
    }
}
