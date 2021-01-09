import {Component, OnInit, Input} from '@angular/core';
import {Chip} from "corny-components/lib/models/chip";

@Component({
  selector: 'ex-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsExComponent implements OnInit {

  constructor() {
  }

  options: Chip[] = []

  ngOnInit() {
    this.options = [
      {
        name: "Chip one",
        selected: true
      },
      {
        name: "Chip two",
        selected: false
      },
      {
        name: "Chip three",
        selected: true
      },
      {
        name: "Chip four",
        selected: false
      },
      {
        name: "Chip five",
        selected: false
      },
    ];
  }
}
