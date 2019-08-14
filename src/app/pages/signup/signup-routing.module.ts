import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupGuard } from './services/signup.guard';

import { SignupComponent } from './signup.component';
import { ProgressComponent } from '../../components/progress/progress.component'

import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { MorePersonalInfoComponent } from './components/more-personal-info/more-personal-info.component';
import { CoverageInfoComponent } from './components/coverage-info/coverage-info.component';
import { SendRequestComponent } from './components/send-request/send-request.component';

const routes: Routes = [
  {
    path: '', component: SignupComponent, children: [
      {
        path: '', component: PersonalInfoComponent
      }, {
        path: 'more', component: MorePersonalInfoComponent
      }, {
        path: 'coverage', component: CoverageInfoComponent
      }, {
        path: 'submit', component: SendRequestComponent, canActivate: [SignupGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
