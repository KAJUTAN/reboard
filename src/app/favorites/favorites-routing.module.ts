import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { FavoritesComponent } from './favorites.component';

const routes: Routes = Route.withShell([
  { path: 'favorites', component: FavoritesComponent, data: { title: extract('Favorites') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FavoritesRoutingModule { }
