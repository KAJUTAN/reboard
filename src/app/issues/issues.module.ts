import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FlexLayoutModule} from '@angular/flex-layout';

// Angular Material components
import {MdTabsModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';

import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {IssuesRoutingModule} from './issues-routing.module';
import {IssuesComponent} from './issues.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FlexLayoutModule,
        CoreModule,
        SharedModule,
        IssuesRoutingModule,
        MdTabsModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule
    ],
    declarations: [
        IssuesComponent
    ],
    providers: []
})
export class IssuesModule {
}
