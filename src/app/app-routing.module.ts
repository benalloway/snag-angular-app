import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicationsFormComponent } from './applications-form/applications-form.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'apply-now', component: ApplicationsFormComponent},
  {path: 'applications-list', component: ApplicationsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
