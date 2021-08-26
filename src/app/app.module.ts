import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationsFormComponent } from './applications-form/applications-form.component';
import { ApplicationsService } from './applications.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsListComponent,
    ApplicationsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApplicationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
