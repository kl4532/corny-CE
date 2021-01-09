import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  SearchbarComponent,
  HideLinkComponent,
  TreeButtonComponent,
  ButtonComponent,
// Components imports addedByScript
  ProgressBarComponent,
  ChipsComponent,
  DropdownComponent,
  CheckboxComponent

} from 'corny-components';

import { SearchbarExComponent } from './examples/searchbar/searchbar.component';
import { HideLinkExComponent } from './examples/hide-link/hide-link.component';
import { TreeButtonExComponent } from './examples/tree-button/tree-button.component';
import { ButtonExComponent } from './examples/button/button.component';
// Examples imports addedByScript
import { ProgressBarExComponent, }  from './examples/progress-bar/progress-bar.component'
import { ChipsExComponent, }  from './examples/chips/chips.component'
import { DropdownExComponent, }  from './examples/dropdown/dropdown.component'
import { CheckboxExComponent, }  from './examples/checkbox/checkbox.component'
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchbarExComponent,
    SearchbarComponent,
    HideLinkExComponent,
    HideLinkComponent,
    TreeButtonExComponent,
    TreeButtonComponent,
    ButtonExComponent,
    ButtonComponent,
    // Declarations added by script
    ProgressBarComponent,
    ProgressBarExComponent,
    ChipsComponent,
    ChipsExComponent,
    DropdownComponent,
    DropdownExComponent,
    CheckboxComponent,
    CheckboxExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    SearchbarExComponent,
    HideLinkExComponent,
    TreeButtonExComponent,
    ButtonExComponent,
    // Entries added by script
    ProgressBarExComponent,
    ChipsExComponent,
    DropdownExComponent,
    CheckboxExComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
