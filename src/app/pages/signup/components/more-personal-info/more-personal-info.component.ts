import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/common/utils/routes-map.util';
import { ProgressBarService } from '../../services/progress-bar/progress-bar.service';

@Component({
  selector: 'app-more-personal-info',
  templateUrl: './more-personal-info.component.html',
  styleUrls: ['./more-personal-info.component.scss']
})
export class MorePersonalInfoComponent implements OnInit {
  degrees: string[] = [
    "Associate degree",
    "Bachelor's degree",
    "Master's degree",
    "Doctoral degree",
  ];
  employmentStatus: string[] = [
    "Employed",
    "Unemployed",
    "Contractor",
    "Student",
    "Other",
  ];
  min: string = '0';
  max: string = '100000';
  tickInterval: string = "1000";
  step: number = 1000;
  thumbLabel: boolean = true;
  income: number;
  savings: number;
  debt: number;


  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router,
    private progressBarService: ProgressBarService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      degree: [this.signupService.user.degree || '', Validators.required],
      employment: [this.signupService.user.employment || '', Validators.required],
      income: [this.signupService.user.income || '', Validators.required],
      savings: [this.signupService.user.savings || '', Validators.required],
      debt: [this.signupService.user.debt || '', Validators.required],
      age: [this.signupService.user.age || '', [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{0,1}$")]],
      zipcode: [this.signupService.user.zipcode || '', Validators.required],
      haveVehicle: [this.signupService.user.haveVehicle || '', Validators.required],
      haveHouse: [this.signupService.user.haveHouse || '', Validators.required],
      havePet: [this.signupService.user.havePet || '', Validators.required],
    });
  }

  next() {
    if (this.form.valid) {
      this.signupService.saveMorePersonalInfo(this.form.value);
      this.progressBarService.setProgress(60);
      this.router.navigate([AppRoutes.SignupCoverageInfo]);
    }
  }


  prev() {
    this.signupService.saveMorePersonalInfo(this.form.value);
    this.progressBarService.setProgress(30);
    this.router.navigate([AppRoutes.Signup]);
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value >= 1000) {
      return Math.round(value / 1000) + "k";
    }
    return value;
  }
}
