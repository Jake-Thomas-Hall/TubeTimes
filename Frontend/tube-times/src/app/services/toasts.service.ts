import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ToastMessage, ToastOptions } from '../models/toast-message.model';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {
  private toastMessage$ = new BehaviorSubject<ToastMessage | null>(null);

  constructor() {
  }

  get toasts$(): Observable<ToastMessage | null> {
    return this.toastMessage$.asObservable();
  }

  openToast(toastOptions: ToastOptions) {
    const message = new ToastMessage(toastOptions);
    this.toastMessage$.next(message);
  }
}
