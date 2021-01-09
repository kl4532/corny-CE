import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { dependencies } from '../../package.json';


import { SearchbarExComponent } from './examples/searchbar/searchbar.component';
import { HideLinkExComponent } from './examples/hide-link/hide-link.component';
import { TreeButtonExComponent } from './examples/tree-button/tree-button.component';
import { ButtonExComponent } from './examples/button/button.component';
// Examples imports addedByScript
import { ProgressBarExComponent, }  from './examples/progress-bar/progress-bar.component'
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
    ProgressBarExComponent,
    ChipsExComponent,
    DropdownExComponent,
    CheckboxExComponent,
];
  @ViewChild('container', {read: ViewContainerRef, static: true}) container: ViewContainerRef;
  selectedComponent: any;
  version: string;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.components.sort();
    this.version = "v" + dependencies["corny-components"].substring(1, dependencies["corny-components"].length);
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
