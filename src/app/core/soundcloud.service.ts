import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Track} from '../core/models/track.model';


// const routes = {
//     quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`
// };

// export interface RandomQuoteContext {
//     // The quote's category: 'nerdy', 'explicit'...
//     category: string;
// }

const API_URL = 'https://api.soundcloud.com/tracks';
const API_KEY = 'JlZIsxg2hY5WnBgtn3jfS0UYCl0K8DOg';
const TRACKS_LIST = '325676273,329292478,331929163,332340296,332357981,332488196,332496473,332502071,' +
    '332511017,332523828,332549342,332645265,332646274,332694599,332710304,332720061,332834985,' +
    '332890853,332898811';

@Injectable()
export class SoundcloudService {

    constructor(private http: Http) {
    }

    // getRandomQuote(context: RandomQuoteContext): Observable<string> {
    //     return this.http.get(routes.quote(context), { cache: true })
    //         .map((res: Response) => res.json())
    //         .map(body => body.value)
    //         .catch(() => Observable.of('Error, could not load joke :-('));
    // }

    getLatestTracks(): Observable<Track[]> {
        // return this.http.get('https://api.soundcloud.com/tracks?created_at[from]=2015-06-01&duration[from]=180000
        // &duration[to]=900000&limit=10&client_id=2dbcad492823222adc83d4ea53034b9e', {cache: true})
        return this.http.get(API_URL + '?ids=' + TRACKS_LIST + '&client_id=' + API_KEY, {cache: true})
            .map((res: Response) => res.json())
            // .map(body => body.value)
            .catch(() => Observable.of('Sorry, something went wrong, try again in a minute'));
    }

}
