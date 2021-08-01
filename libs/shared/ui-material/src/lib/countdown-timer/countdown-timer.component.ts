import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

@Component({
  selector: 'material-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements AfterViewInit {
  countDownTime!: number;

  @Input() set time(value: string) {
    this.countDownTime = new Date(value).getTime();
  }

  get seconds(): string {
    const seconds = differenceInSeconds(this.countDownTime, new Date()) % 60;
    return this.formatTime(seconds);
  }

  get minutes(): string {
    const minutes = differenceInMinutes(this.countDownTime, new Date()) % 60;
    return this.formatTime(minutes);
  }

  get hours(): string {
    const hours = differenceInHours(this.countDownTime, new Date()) % 24;
    return this.formatTime(hours);
  }

  get days(): string {
    const days = differenceInDays(this.countDownTime, new Date());
    return this.formatTime(days);
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }
}
