import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {GithubService} from '../../github.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    placeholder = 'Repo name, e.g. angular/material2';
    repoName = 'angular/material25';
    checked = false;
    error = '';
    repoInput = new FormControl({value: this.repoName, disabled: true}, [
        Validators.required,
        Validators.pattern(EMAIL_REGEX),
        this.checkRepoExists.bind(this)
    ]);

    constructor(public dialogRef: MdDialogRef<SettingsComponent>,
                private githubService: GithubService) {
    }

    ngOnInit() {
    }

    toggleInputStatus() {
        if (this.checked) {
            return this.repoInput.enable();
        }
        this.repoInput.disable();
    }

    checkRepoExists(repoName: string) {
        this.githubService.repoExists(repoName)
            .subscribe(res => {
                this.error = res;
            }, err => {
                console.log(err);
            });
    }

}


// form = new FormGroup({
//     first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
//     last: new FormControl('Drew', Validators.required)
// });
