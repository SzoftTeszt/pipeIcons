import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Alarm, App, Bookmark } from 'ng-bootstrap-icons/icons';
import { allIcons } from 'ng-bootstrap-icons/icons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { KarbantasComponent } from './karbantas/karbantas.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
