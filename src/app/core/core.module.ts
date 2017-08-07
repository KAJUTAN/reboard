import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpModule, Http, XHRBackend, ConnectionBackend, RequestOptions} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';

// Angular Material components
import {MdToolbarModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdSnackBarModule} from '@angular/material';

import {ShellComponent} from './shell/shell.component';
import {HeaderComponent} from './shell/header/header.component';
import {I18nService} from './i18n.service';
import {HttpService} from './http/http.service';
import {HttpCacheService} from './http/http-cache.service';

export function createHttpService(backend: ConnectionBackend,
                                  defaultOptions: RequestOptions,
                                  httpCacheService: HttpCacheService) {
    return new HttpService(backend, defaultOptions, httpCacheService);
}

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        TranslateModule,
        RouterModule,
        NgbModule.forRoot(),
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdSidenavModule,
        MdListModule,
        MdMenuModule,
        MdSnackBarModule
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [
        ShellComponent,
        HeaderComponent
    ],
    providers: [
        I18nService,
        HttpCacheService,
        {
            provide: Http,
            deps: [XHRBackend, RequestOptions, HttpCacheService],
            useFactory: createHttpService
        }
    ]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        // Import guard
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }

}
