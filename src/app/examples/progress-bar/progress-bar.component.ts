import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ex-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarExComponent implements OnInit {

  started: boolean;
  timesUp: boolean;
  valueCountdown: number;
  valueProgress: number;

  constructor() {}

  ngOnInit() {
    this.valueProgress = 0;
    this.valueCountdown = 100;
  }

  startCountdown() {
    const interval = setInterval(()=> {
      if(this.valueCountdown<=0) {
        clearInterval(interval);
      }
      this.valueCountdown = this.valueCountdown - 0.1;
    }, 100);
  }

  startProgress() {
    const interval = setInterval(()=> {
      if(this.valueProgress>=100) {
        clearInterval(interval);
      }
      this.valueProgress = this.valueProgress + 0.1;
    }, 100);
  }
  reset() {
    this.started = false;
    this.timesUp = true;
  }

}
