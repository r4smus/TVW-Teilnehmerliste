import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ManagementComponent } from './management/management.component';
import { AddTrainingComponent } from './add-training/add-training.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    ManagementComponent,
    AddTrainingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
