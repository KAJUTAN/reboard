import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

// import {Guser} from '../core/models/guser.model';

const API_URL = 'https://api.github.com/users';
const GITHUB_FOUNDER = 'mojombo';
const REPO = 'angular/material2';
const REPOS_URL = 'https://api.github.com/repos/';
const USERS_MOCK = 'assets/mocks/github-users.json';
const FOUNDER_MOCK = 'assets/mocks/github-founder.json';
const PARTICIPATION_MOCK = 'assets/mocks/github/participation.json';
const LANGUAGES_MOCK = 'assets/mocks/github/languages.json';
const CONTRIBUTORS_MOCK = 'assets/mocks/github/contributors.json';
const REPO_INFO_MOCK = 'assets/mocks/github/info.json';
const REPO_ISSUES = 'assets/mocks/github/issues.json';

@Injectable()
export class GithubService {

    // https://stackoverflow.com/questions/42555259/exchanging-data-between-sibling-components-in-angular-2
    public repoName = new Subject<string>();
    public repoName$ = this.repoName.asObservable(); // TODO: Should be in constructor?

    constructor(private http: Http) {
    }

    publishRepo(repoName: string) {
        this.repoName.next(repoName);
    }

    getUsers(): Observable<any> {
        // return this.http.get(API_URL, {cache: true})
        return this.http.get(USERS_MOCK, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getFounder(): Observable<any> {
        // return this.http.get(API_URL + '/' + GITHUB_FOUNDER, {cache: true})
        return this.http.get(FOUNDER_MOCK, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getRepoInfo(repoName: string): Observable<any> {
        // return this.http.get(REPOS_URL + repoName, {cache: true})
        return this.http.get(REPO_INFO_MOCK, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getParticipation(): Observable<any> {
        // return this.http.get(REPOS_URL + REPO + 'stats/participation', {cache: true})
        return this.http.get(PARTICIPATION_MOCK, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getLanguages(): Observable<any> {
        return this.http.get(LANGUAGES_MOCK, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getContributors(): Observable<any> {
        return this.http.get(CONTRIBUTORS_MOCK, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getIssues(state: string): Observable<any> {
        return this.http.get(REPO_ISSUES + '?state=' + state, {cache: true})
        // return this.http.get(REPOS_URL + REPO + '/issues?state=' + state, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    repoExists(repo: string): Observable<any> {
        return this.http.get(REPOS_URL + repo)
            .map((res: Response) => res.json())
            .catch(() => Observable.of('No such repo, please try again.'));
    }

}
