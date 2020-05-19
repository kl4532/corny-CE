import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'ex-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxExComponent implements OnInit {

  checked: boolean = false;
  constructor() {}

  ngOnInit() {}
  
}
