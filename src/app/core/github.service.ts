import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Guser} from '../core/models/guser.model';

const API_URL = 'https://api.github.com/users';
const GITHUB_FOUNDER = 'mojombo';
const USERS_MOCK = 'assets/mocks/github-users.json';
const FOUNDER_MOCK = 'assets/mocks/github-founder.json';

@Injectable()
export class GithubService {

    constructor(private http: Http) {
    }

    getUsers(): Observable<Guser[]> {
        // return this.http.get(API_URL, {cache: true})
        return this.http.get(USERS_MOCK, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getFounder(): Observable<Guser> {
        // return this.http.get(API_URL + '/' + GITHUB_FOUNDER, {cache: true})
        return this.http.get(FOUNDER_MOCK, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

}
