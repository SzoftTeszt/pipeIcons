import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Alarm, App, Bookmark } from 'ng-bootstrap-icons/icons';
import { allIcons } from 'ng-bootstrap-icons/icons';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { KarbantasComponent } from './karbantas/karbantas.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { Router } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { onAppInit } from './app.initializer';
import { ConfigService } from './config.service';

const icons = {
  Alarm,
  App,
  Bookmark
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KarbantasComponent,
    NavComponent,
    SearchPipe,
    SortPipe,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BootstrapIconsModule.pick(allIcons),
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: onAppInit,
    multi:true,
    deps:[Router, HttpClient, ConfigService]
 }],
  bootstrap: [AppComponent]
})
export class AppModule { }
