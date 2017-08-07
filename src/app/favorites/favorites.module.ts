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
import {FavoritesRoutingModule} from './favorites-routing.module';
import {FavoritesComponent} from './favorites.component';
import {SoundcloudService} from '../core/soundcloud.service';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FlexLayoutModule,
        CoreModule,
        SharedModule,
        FavoritesRoutingModule,
        MdTabsModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule
    ],
    declarations: [
        FavoritesComponent
    ],
    providers: [
        SoundcloudService
    ]
})
export class FavoritesModule {
}
