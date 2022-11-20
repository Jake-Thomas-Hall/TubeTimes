import { animate, style, transition, trigger } from "@angular/animations";

export const slideInOnLoad = trigger('pageLoadTrigger', [
    transition(':enter', [
      style({transform: 'translateY(-100%)', opacity: 0}),
      animate('.2s', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
]);