import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const REPOS_URL = 'https://api.github.com/repos/';

// Mock data
const PARTICIPATION_MOCK = 'assets/mocks/github/participation.json';
const LANGUAGES_MOCK = 'assets/mocks/github/languages.json';
const CONTRIBUTORS_MOCK = 'assets/mocks/github/contributors.json';
const REPO_INFO_MOCK = 'assets/mocks/github/info.json';
const OPEN_ISSUES_MOCK = 'assets/mocks/github/open-issues.json';
const CLOSED_ISSUES_MOCK = 'assets/mocks/github/closed-issues.json';

@Injectable()
export class GithubService {
    // https://stackoverflow.com/questions/42555259/exchanging-data-between-sibling-components-in-angular-2
    public repoName = new BehaviorSubject<string>('angular/material2');
    public repoName$ = this.repoName.asObservable(); // TODO: Should be in constructor?
    public useRealData = new BehaviorSubject<boolean>(false);
    public useRealData$ = this.useRealData.asObservable();

    constructor(private http: Http) {
    }

    publishRepo(repoName: string) {
        this.repoName.next(repoName);
    }

    toggleDataStatus(useRealData: boolean) {
        this.useRealData.next(useRealData);
    }

    getRepoInfo(useRealData: boolean, repoName: string): Observable<any> {
        const apiUrl = useRealData ? REPOS_URL + repoName : REPO_INFO_MOCK;
        return this.http.get(apiUrl, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getCommits(useRealData: boolean, repoName: string): Observable<any> {
        const apiUrl = useRealData ? REPOS_URL + repoName + '/stats/participation' : PARTICIPATION_MOCK;
        return this.http.get(apiUrl, {cache: true})
            .map((res: Response) => res.json().all)
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getLanguages(useRealData: boolean, repoName: string): Observable<any> {
        const apiUrl = useRealData ? REPOS_URL + repoName + '/languages' : LANGUAGES_MOCK;
        return this.http.get(apiUrl, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getContributors(useRealData: boolean, repoName: string): Observable<any> {
        const apiUrl = useRealData ? REPOS_URL + repoName + '/contributors' : CONTRIBUTORS_MOCK;
        return this.http.get(apiUrl, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    getIssues(useRealData: boolean, repoName: string, state: string): Observable<any> {
        const apiUrl = useRealData ? REPOS_URL + repoName + '/issues?state=' + state :
            state === 'open' ? OPEN_ISSUES_MOCK : CLOSED_ISSUES_MOCK;
        return this.http.get(apiUrl, {cache: true})
            .map((res: Response) => res.json())
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

    repoExists(repo: string): Observable<any> {
        return this.http.get(REPOS_URL + repo)
            .map((res: Response) => res.json())
            .catch(() => Observable.of('No such repo, please try again.'));
    }

}
