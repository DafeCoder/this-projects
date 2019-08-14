import { Injectable } from "@angular/core";

import { User } from "../../../core/models/user";
import { AuthService } from "../../../core/services/auth.service";

@Injectable({
  providedIn: "root"
})
export class SignupService {
  user: User = {
    firstName: "",
    lastName: "",
    phone: "",
    degree: "",
    employment: "",
    income: 0,
    savings: 0,
    debt: 0,
    age: 0,
    zipcode: "",
    haveVehicle: true,
    haveHouse: true,
    havePet: true,
    have_health_cover: "Yes",
    have_vision_cover: "Yes",
    have_dental_cover: "Yes",
    have_life_cover: "Yes",
    have_longtermdisability_cover: "Yes",
    have_shorttermdisability_cover: "Yes",
    have_accident_cover: "Yes",
    have_criticalillness_cover: "Yes",
    have_auto_cover: "Yes",
    have_homeowner_cover: "Yes",
    have_renters_cover: "Yes",
    have_pet_cover: "Yes"
  };

  constructor(private authService: AuthService) {}

  savePersonalInfo(user: User) {
    this.user.firstName = user.firstName;
    this.user.lastName = user.lastName;
    this.user.phone = user.phone;
  }

  saveMorePersonalInfo(user: User) {
    this.user.degree = user.degree;
    this.user.employment = user.employment;
    this.user.income = user.income;
    this.user.savings = user.savings;
    this.user.debt = user.debt;
    this.user.age = user.age;
    this.user.zipcode = user.zipcode;
    this.user.haveVehicle = user.haveVehicle;
    this.user.haveHouse = user.haveHouse;
    this.user.havePet = user.havePet;
  }

  saveCoverageInfo(user: User) {
    this.user.have_health_cover = user.have_health_cover;
    this.user.have_vision_cover = user.have_vision_cover;
    this.user.have_dental_cover = user.have_dental_cover;
    this.user.have_life_cover = user.have_life_cover;
    this.user.have_longtermdisability_cover =
      user.have_longtermdisability_cover;
    this.user.have_shorttermdisability_cover =
      user.have_shorttermdisability_cover;
    this.user.have_accident_cover = user.have_accident_cover;
    this.user.have_criticalillness_cover = user.have_criticalillness_cover;
    this.user.have_auto_cover = user.have_auto_cover;
    this.user.have_homeowner_cover = user.have_homeowner_cover;
    this.user.have_renters_cover = user.have_renters_cover;
    this.user.have_pet_cover = user.have_pet_cover;
  }

  submit() {
    return this.authService.register(this.user);
  }
}
