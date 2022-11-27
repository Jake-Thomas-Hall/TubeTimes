import { animate, style, transition, trigger } from "@angular/animations";

export const hideOnExit = trigger(
    'hideOnExit', [
    transition(':leave', [
        style({ opacity: 1 }),
        animate('0s', style({ opacity: 0 }))
    ])
]);