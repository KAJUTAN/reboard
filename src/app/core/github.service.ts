import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Guser} from '../core/models/guser.model';

const API_URL = 'https://api.github.com/users';
const GITHUB_FOUNDER = 'mojombo';

@Injectable()
export class GithubService {

    constructor(private http: Http) {
    }

    getUsers(): Observable<Guser[]> {
        return this.http.get(API_URL, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getFounder(): Observable<Guser> {
        return this.http.get(API_URL + '/' + GITHUB_FOUNDER, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

}
