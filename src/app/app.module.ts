import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestBtnComponent } from './examples/test-btn/test-btn.component';
import { HamburgerMenuComponent } from './examples/hamburger-menu/hamburger-menu.component';
import { SearchbarComponent } from './examples/searchbar/searchbar.component';
import { HideLinkComponent } from './examples/hide-link/hide-link.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBtnComponent,
    HamburgerMenuComponent,
    SearchbarComponent,
    HideLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents:[
    TestBtnComponent,
    HamburgerMenuComponent,
    SearchbarComponent,
    HideLinkComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
