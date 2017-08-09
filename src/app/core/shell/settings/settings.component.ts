import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {FormControl, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import {GithubService} from '../../github.service';

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    repoInput: FormControl;


    constructor(public dialogRef: MdDialogRef<SettingsComponent>,
                private githubService: GithubService) {
    }

    ngOnInit() {

        this.repoInput = new FormControl({value: this.repoName, disabled: true}, [
            Validators.required
        ]);

    }

    toggleInputStatus() {
        if (this.checked) {
            return this.repoInput.enable();
        }
        this.repoInput.disable();
    }

    checkRepoExists() {
        // TODO: Only get in here if any other validations have passed
        if (this.checked) {
            this.githubService.repoExists(this.repoInput.value)
                .subscribe(res => {
                    if (!res.id) {
                        this.repoInput.setErrors({repoExists: {}});
                    } else {
                        this.dialogRef.close();
                    }
                }, err => {
                    console.log(err);
                });
        } else {
            this.dialogRef.close();
        }
    }

    closeDialog() {
        this.dialogRef.close();
    }

}
