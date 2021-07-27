import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'material-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NotFoundComponent implements OnInit, OnDestroy {
  redirectCount = 10;
  private intervalId!: ReturnType<typeof setTimeout>;

  get redirectMessage(): string {
    if (this.redirectCount <= 0) {
      return 'Redirecting ...';
    }

    return `Redirecting you to home page in ${this.redirectCount}`;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.redirectCount--;
      if (this.redirectCount === 0) {
        this.router.navigate(['']);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
