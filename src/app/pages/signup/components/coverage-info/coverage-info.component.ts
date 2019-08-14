import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignupService } from "../../services/signup.service";
import { Router } from "@angular/router";
import { AppRoutes } from "src/app/common/utils/routes-map.util";
import { ProgressBarService } from '../../services/progress-bar/progress-bar.service';

@Component({
  selector: "app-coverage-info",
  templateUrl: "./coverage-info.component.html",
  styleUrls: ["./coverage-info.component.scss"]
})
export class CoverageInfoComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router,
    private progressBarService: ProgressBarService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      have_health_cover: [
        this.signupService.user.have_health_cover || "",
        Validators.required
      ],
      have_vision_cover: [
        this.signupService.user.have_vision_cover || "",
        Validators.required
      ],
      have_dental_cover: [
        this.signupService.user.have_dental_cover || "",
        Validators.required
      ],
      have_life_cover: [
        this.signupService.user.have_life_cover || "",
        Validators.required
      ],
      have_longtermdisability_cover: [
        this.signupService.user.have_longtermdisability_cover || "",
        Validators.required
      ],
      have_shorttermdisability_cover: [
        this.signupService.user.have_shorttermdisability_cover || "",
        Validators.required
      ],
      have_accident_cover: [
        this.signupService.user.have_accident_cover || "",
        Validators.required
      ],
      have_criticalillness_cover: [
        this.signupService.user.have_criticalillness_cover || "",
        Validators.required
      ],
      have_auto_cover: [
        this.signupService.user.have_auto_cover || "",
        Validators.required
      ],
      have_homeowner_cover: [
        this.signupService.user.have_homeowner_cover || "",
        Validators.required
      ],
      have_renters_cover: [
        this.signupService.user.have_renters_cover || "",
        Validators.required
      ],
      have_pet_cover: [
        this.signupService.user.have_pet_cover || "",
        Validators.required
      ]
    });
  }

  next() {
    if (this.form.valid) {
      this.signupService.saveCoverageInfo(this.form.value);
      this.progressBarService.setProgress(100);
      this.router.navigate([AppRoutes.SignupSubmit]);
    }
  }

  prev() {
    this.signupService.saveCoverageInfo(this.form.value);
    this.progressBarService.setProgress(60);
    this.router.navigate([AppRoutes.SignupMorePersonalInfo]);
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
