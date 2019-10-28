import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ex-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuExComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggleMenu(event){
    document.getElementById("sidemenu").classList.toggle("visible", event);
  }
}
