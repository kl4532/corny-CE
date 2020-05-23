import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ex-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownExComponent implements OnInit {

  options = ["Poland", "Portugal", "Pony", "Panama", "France", "Austria", "Oman", "Poltergeist", "Puertorico"];

  constructor() {}

  ngOnInit() {}
  
}
