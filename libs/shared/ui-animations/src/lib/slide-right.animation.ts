import { animate, style, transition, trigger } from '@angular/animations';

export const slideRightAnimation = trigger('slideRightAnimation', [
  transition(':enter', [
    style({ display: 'block', transform: 'translateX(100%)' }),
    animate('0.5s ease-out'),
  ]),
]);
