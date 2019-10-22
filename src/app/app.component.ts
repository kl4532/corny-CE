import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SearchbarExComponent } from './examples/searchbar/searchbar.component';
import { HideLinkExComponent } from './examples/hide-link/hide-link.component';
import { HamburgerMenuExComponent } from './examples/hamburger-menu/hamburger-menu.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  components = [SearchbarExComponent, HideLinkExComponent, HamburgerMenuExComponent];
  @ViewChild('container', {read: ViewContainerRef, static: true}) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
  }

  addComponent(component: any) {
    //clean container
    this.container.clear();    
    //add component example
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const ref = this.container.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}
