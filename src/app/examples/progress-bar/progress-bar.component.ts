import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ex-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarExComponent implements OnInit {

  started: boolean;
  timesUp: boolean;

  constructor() {}

  ngOnInit() {}

  reset() {
    this.started = false;
    this.timesUp = true;
  }

}
