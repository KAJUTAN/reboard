import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { IssuesComponent } from './issues.component';

const routes: Routes = Route.withShell([
  { path: 'issues', component: IssuesComponent, data: { title: extract('Issues') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class IssuesRoutingModule { }
