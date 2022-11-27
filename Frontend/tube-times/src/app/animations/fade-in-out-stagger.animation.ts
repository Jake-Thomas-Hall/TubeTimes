import { animate, group, query, stagger, style, transition, trigger } from "@angular/animations";

export const fadeInOutStagger = trigger('fadeInOutStagger', [
  transition('* => *', [
    group([
      query('.stagger-animate:enter', [
        style({ opacity: 0, height: '0', width: '0' }),
        stagger(50, [
          animate('200ms', style({ height: '*', width: '*' })),
          animate('100ms', style({ opacity: 1 }))
        ])
      ], { optional: true }),
      query('.stagger-animate:leave', [
        style({ opacity: 1, height: '*', width: '*' }),
        stagger(50, [
          animate('100ms', style({ opacity: 0 })),
          animate('100ms', style({ height: '0', width: '0' }))
        ])
      ], { optional: true }),
    ])
  ])
]);