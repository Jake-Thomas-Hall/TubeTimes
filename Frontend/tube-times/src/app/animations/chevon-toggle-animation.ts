import { animate, state, style, transition, trigger } from "@angular/animations";

export const chevronToggle = trigger(
    'chevronToggle', [
    state('expanded', style({ transform: 'rotate(90deg)'})),
    state('collapsed', style({ transform: 'rotate(0deg)'})),
    transition('expanded <=> collapsed', animate('.2s'))
]);