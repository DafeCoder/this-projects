import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  progressSubject$ = new BehaviorSubject<number>(0);

  readonly progress$ = this.progressSubject$.asObservable();

  constructor() { }

  setProgress(value: number) {
    this.progressSubject$.next(value);
  }
}
