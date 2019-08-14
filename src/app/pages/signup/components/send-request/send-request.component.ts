import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../../core/models/user';

import { SignupService } from '../../services/signup.service';
import { ScoresStoreService } from '../../../../common/services/scores-store.service';
import { CommonService } from '../../../../common/services/common.service';


interface ResponseValue {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  phone: string;
  degree: string;
  employment: string;
  age: number;
  zipcode: string;
  income: number;
  scores: number[][];
}

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.scss']
})
export class SendRequestComponent implements OnInit {

  isLoading = false;
  response;
  registerResponse: any = null;
  user: User;

  constructor(
    private signupService: SignupService,
    private commonService: CommonService,
    private scoresStoreService: ScoresStoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.signupService.user;
  }

  async send() {
    try {
      this.isLoading = true;
      this.response = await this.signupService.submit().toPromise();
      const oldScoreFormat: number[][] = [
        [1, 1, this.response.score_overall, this.response.score_medical, this.response.score_income, this.response.score_stuff, this.response.score_liability, this.response.score_digital],
        [2, 2, this.response.score_overall, this.response.score_digital, this.response.score_liability, this.response.score_stuff, this.response.score_income, this.response.score_medical],
        [3, 3, this.response.score_overall, this.response.score_stuff, this.response.score_medical, this.response.score_digital, this.response.score_income, this.response.score_liability],
      ]; // FIXME
      this.scoresStoreService.addScores(oldScoreFormat);
      this.registerResponse = '+1-202-555-1234'; // FIXME

      // this.scoresStoreService.addScores(this.response.scores);
      // this.registerResponse = this.response['phone_number'];

      this.commonService.toastr('Your request successfully sent.');
    } catch (e) {
      this.commonService.toastr('Sorry, Failed to save user information. Please try again later.');
    } finally {
      this.isLoading = false;
    }
  }

}
