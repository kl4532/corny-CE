import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ex-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonExComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show() {
    alert("message")
  }

}
