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
  DropdownComponent,
  CheckboxComponent,
  SelectButtonComponent,
  CButtonDirective,
  ToolbarComponent
} from 'corny-components';

import { SearchbarExComponent } from './examples/searchbar/searchbar.component';
import { HideLinkExComponent } from './examples/hide-link/hide-link.component';
import { TreeButtonExComponent } from './examples/tree-button/tree-button.component';
import { ButtonExComponent } from './examples/button/button.component';
// Examples imports addedByScript
import { ProgressBarExComponent, }  from './examples/progress-bar/progress-bar.component'
import { DropdownExComponent, }  from './examples/dropdown/dropdown.component'
import { CheckboxExComponent, }  from './examples/checkbox/checkbox.component'
import {AppComponent} from "./app.component";
import {SelectButtonExComponent} from "./examples/selectButton/selectButton.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToolbarExComponent} from "./examples/toolbar/toolbar.component";

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
    DropdownComponent,
    DropdownExComponent,
    CheckboxComponent,
    CheckboxExComponent,
    SelectButtonComponent,
    SelectButtonExComponent,
    CButtonDirective,
    ToolbarComponent,
    ToolbarExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    SearchbarExComponent,
    HideLinkExComponent,
    TreeButtonExComponent,
    ButtonExComponent,
    // Entries added by script
    ProgressBarExComponent,
    DropdownExComponent,
    CheckboxExComponent,
    SelectButtonExComponent,
    ToolbarExComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
