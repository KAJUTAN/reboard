import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';

// Angular Material components
import {MdTabsModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';

import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SoundcloudService} from '../core/soundcloud.service';
import {GithubService} from '../core/github.service';



@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        NgxChartsModule,
        CoreModule,
        SharedModule,
        HomeRoutingModule,
        MdTabsModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        SoundcloudService,
        GithubService
    ]
})
export class HomeModule {
}
