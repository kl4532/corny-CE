import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  SearchbarComponent,
  HideLinkComponent,
  TreeButtonComponent,
  ButtonComponent,
// Components imports addedByScript
ChipsComponent,
DropdownComponent,
CheckboxComponent

} from 'corny-components';

import { SearchbarExComponent } from './examples/searchbar/searchbar.component';
import { HideLinkExComponent } from './examples/hide-link/hide-link.component';
import { TreeButtonExComponent } from './examples/tree-button/tree-button.component';
import { ButtonExComponent } from './examples/button/button.component';
// Examples imports addedByScript
import { ChipsExComponent, }  from './examples/chips/chips.component'
import { DropdownExComponent, }  from './examples/dropdown/dropdown.component'
import { CheckboxExComponent, }  from './examples/checkbox/checkbox.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  components = [
    SearchbarExComponent,
    HideLinkExComponent,
    TreeButtonExComponent,
    ButtonExComponent,
    // Components added by script
ChipsExComponent,
DropdownExComponent,
CheckboxExComponent,
];
  @ViewChild('container', {read: ViewContainerRef, static: true}) container: ViewContainerRef;
  selectedComponent: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.components.sort();
  }

  addComponent(component: any) {
    //clean container
    this.container.clear();
    //add component example
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const ref = this.container.createComponent(factory);
    ref.changeDetectorRef.detectChanges();

    this.selectedComponent = component;
  }
}

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
ChipsExComponent,
DropdownExComponent,
CheckboxExComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
