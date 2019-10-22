import { Component, OnInit, NgModule } from '@angular/core';
import { SearchbarComponent } from 'common-components';

@Component({
  selector: 'ex-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarExComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

// @NgModule({
//   declarations: [
//     SearchbarComponent,
//   ],
// })
// export class SearchbarExModule { }
