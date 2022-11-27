import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const fadeInStagger = trigger('fadeInStagger', [
  transition(':enter', [
    query('.stagger-animate', [
      style({transform: 'translateY(-100%)', opacity: 0}),
      stagger(150, [
        animate('.2s', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ], { optional: true }),
  ])
]);