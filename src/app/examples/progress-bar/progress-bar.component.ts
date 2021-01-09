import {Component, OnInit, Input} from '@angular/core';

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
  progressStarted: boolean;
  countdownStarted: boolean;

  constructor() {
  }

  ngOnInit() {
    this.valueProgress = 0;
    this.valueCountdown = 100;
  }

  startCountdown() {
    this.valueCountdown = 100;
    this.countdownStarted = true;
    const interval = setInterval(() => {
      if (this.valueCountdown <= 0) {
        this.countdownStarted = false;
        clearInterval(interval);
        return;
      }
      if (this.valueCountdown - 5 >= 0) {
        this.valueCountdown = this.valueCountdown - 5;
      } else {
        this.valueCountdown = 0;
      }
    }, 1000);
  }

  startProgress() {
    this.valueProgress = 0;
    this.progressStarted = true;
    const interval = setInterval(() => {
      if (this.valueProgress >= 100) {
        this.progressStarted = false;
        clearInterval(interval);
        return;
      }
      if (this.valueProgress + 1 <= 100) {
        this.valueProgress = this.valueProgress + 1;
      } else {
        this.valueProgress = 100;
      }
    }, 100);
  }

  reset() {
    this.started = false;
    this.timesUp = true;
  }

}
