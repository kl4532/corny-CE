import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchbarComponent, HideLinkComponent, HamburgerMenuComponent } from 'corny-components';

import { SearchbarExComponent } from './examples/searchbar/searchbar.component';

import { HideLinkExComponent } from './examples/hide-link/hide-link.component';
import { HamburgerMenuExComponent } from './examples/hamburger-menu/hamburger-menu.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    SearchbarExComponent,
    SearchbarComponent,
    HideLinkExComponent,
    HideLinkComponent,
    HamburgerMenuExComponent,
    HamburgerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    SearchbarExComponent,
    HideLinkExComponent,
    HamburgerMenuExComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
