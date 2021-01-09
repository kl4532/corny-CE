import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ex-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarExComponent implements OnInit {
  result: string;

  constructor() {
  }

  ngOnInit() {
  }
}
