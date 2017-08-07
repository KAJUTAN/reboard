import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // required by Angular Material
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs'; // required by Angular Material

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {IssuesModule} from './issues/issues.module';
import {AboutModule} from './about/about.module';
import {PlayerModule} from './player/player.module';

import {SoundcloudService} from './core/soundcloud.service';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot(),
        NgbModule.forRoot(),
        CoreModule,
        SharedModule,
        HomeModule,
        IssuesModule,
        AboutModule,
        AppRoutingModule,
        PlayerModule
    ],
    declarations: [AppComponent],
    providers: [SoundcloudService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
