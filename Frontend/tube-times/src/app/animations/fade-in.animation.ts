import { animate, style, transition, trigger } from "@angular/animations";

export const fadeIn = trigger(
    'fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('.2s', style({ opacity: 1 }))
    ])
]);