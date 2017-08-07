import {Component, OnInit, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {I18nService} from '../../i18n.service';
// import {MdSnackBar} from '@angular/material';
import {MdDialog, MdDialogRef} from '@angular/material';
import {SettingsComponent} from '../settings/settings.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    @Input() sidenav: any;
    pageTitle: String;
    selectedOption: string;

    constructor(private i18nService: I18nService,
                // private snackBar: MdSnackBar,
                public dialog: MdDialog,
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

    openDialog() {
        let dialogRef = this.dialog.open(SettingsComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }
}
