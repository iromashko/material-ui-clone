import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'material-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements AfterViewInit {
  countDownTime!: number;

  timerNumerics = {
    milliseconds: 1000,
    minuteInSeconds: 60,
    minutesInHours: 60,
    hoursInDay: 24,
  };

  @Input() set time(value: string) {
    this.countDownTime = new Date(value).getTime();
  }

  get seconds(): string {
    const { milliseconds, minuteInSeconds } = this.timerNumerics;
    const seconds = Math.floor(
      (this.getTimeDifference() % (minuteInSeconds * milliseconds)) /
        milliseconds
    );

    return this.formatTime(seconds);
  }

  get minutes(): string {
    const { minutesInHours, milliseconds, minuteInSeconds } =
      this.timerNumerics;

    const minutes = Math.floor(
      (this.getTimeDifference() %
        (minutesInHours * minuteInSeconds * milliseconds)) /
        (minuteInSeconds * milliseconds)
    );

    return this.formatTime(minutes);
  }

  get hours(): string {
    const { minutesInHours, milliseconds, minuteInSeconds, hoursInDay } =
      this.timerNumerics;

    const hours = Math.floor(
      (this.getTimeDifference() %
        (hoursInDay * minutesInHours * minuteInSeconds * milliseconds)) /
        (minutesInHours * minuteInSeconds * milliseconds)
    );

    return this.formatTime(hours);
  }

  get days(): string {
    const { minutesInHours, milliseconds, minuteInSeconds, hoursInDay } =
      this.timerNumerics;

    const days = Math.floor(
      this.getTimeDifference() /
        (milliseconds * minutesInHours * minuteInSeconds * hoursInDay)
    );

    return this.formatTime(days);
  }

  private getTimeDifference(): number {
    const currentTime = new Date().getTime();
    return this.countDownTime - currentTime;
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }
}
