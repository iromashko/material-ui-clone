import { animate, style, transition, trigger } from '@angular/animations';

export const zoomInOutAnimation = trigger('zoomInOutAnimation', [
  transition(':enter', [
    style({ transform: 'scale(0)' }),
    animate(300, style({ transform: 'scale(1)' })),
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)' }),
    animate(300, style({ transform: 'scale(0)' })),
  ]),
]);
