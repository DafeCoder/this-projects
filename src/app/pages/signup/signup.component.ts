import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from './services/progress-bar/progress-bar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  progress$: Observable<number>;

  constructor(private progressBarService: ProgressBarService) { }

  ngOnInit() {
    this.progress$ = this.progressBarService.progress$;
    this.progressBarService.setProgress(10);
  }

}
