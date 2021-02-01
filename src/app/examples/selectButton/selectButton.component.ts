import {Component, OnInit} from '@angular/core';
import {SelectButton} from "corny-components/lib/models/selectButton";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'ex-selectButton',
  templateUrl: './selectButton.component.html',
  styleUrls: ['./selectButton.component.scss']
})
export class SelectButtonExComponent implements OnInit {

  constructor() {
  }

  options: SelectButton[] = [];
  btnForm: FormGroup

  ngOnInit() {
    this.options = [
      {
        name: "Btn one",
        selected: true
      },
      {
        name: "Btn two",
        selected: false
      },
      {
        name: "Btn three",
        selected: true
      },
      {
        name: "Btn four",
        selected: false
      },
      {
        name: "Btn five",
        selected: false
      },
    ];

    this.btnForm = new FormGroup({
      buttons: new FormControl([]),
    });
  }

  logForm() {
    console.log('form:', this.btnForm);
  }

}
