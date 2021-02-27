import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, HostListener} from '@angular/core';
import { dependencies } from '../../package.json';

import { SearchbarExComponent } from './examples/searchbar/searchbar.component';
import { HideLinkExComponent } from './examples/hide-link/hide-link.component';
import { TreeButtonExComponent } from './examples/tree-button/tree-button.component';
import { ButtonExComponent } from './examples/button/button.component';
import {trigger, transition, animate, style, state} from '@angular/animations'
// Examples imports addedByScript
import { SelectButtonExComponent, }  from './examples/selectButton/selectButton.component'
import { ProgressBarExComponent, }  from './examples/progress-bar/progress-bar.component'
import { DropdownExComponent, }  from './examples/dropdown/dropdown.component'
import { CheckboxExComponent, }  from './examples/checkbox/checkbox.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('enabledStateChange', [
      state('open', style({
        transform: 'translateX(0)',
      })),
      state('closed', style({
        transform: 'translateX(-90%)',
      })),
      transition('* => *', animate('350ms ease-out'))
    ])

  ]
})

export class AppComponent {
  components = [
    SearchbarExComponent,
    HideLinkExComponent,
    TreeButtonExComponent,
    ButtonExComponent,
    // Components added by script
SelectButtonExComponent,
    ProgressBarExComponent,
    DropdownExComponent,
    CheckboxExComponent,
];
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const w = event.target.innerWidth;
    if(w<=500) {
      this.sidenavState = 'closed';
      return;
    }
    this.sidenavState ='open';
  }

  @ViewChild('container', {read: ViewContainerRef, static: true}) container: ViewContainerRef;
  selectedComponent: any;
  version: string;
  sidenavState = 'open';

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.components.sort();
    this.version = "v" + dependencies["corny-components"].substring(1, dependencies["corny-components"].length);
  }

  toggleSidenav() {
    this.sidenavState = this.sidenavState === 'open' ? 'closed' : 'open';
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
