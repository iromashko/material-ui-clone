import {
  Directive,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[directivesDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Output() debounceClick = new EventEmitter();

  clicks = new Subject();
  subscription!: Subscription;

  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next();
  }

  ngOnInit(): void {
    const debounceTimeInMs = 500;

    this.subscription = this.clicks
      .pipe(debounceTime(debounceTimeInMs))
      .subscribe((value: any) => this.debounceClick.emit(value));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
