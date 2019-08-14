import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../common/material/material.module';
import { ComponentsModule } from '../../components/components.module';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { MorePersonalInfoComponent } from './components/more-personal-info/more-personal-info.component';
import { CoverageInfoComponent } from './components/coverage-info/coverage-info.component';
import { SendRequestComponent } from './components/send-request/send-request.component';
import { MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
import { ProgressBarService } from './services/progress-bar/progress-bar.service';

@NgModule({
  declarations: [
    SignupComponent,
    PersonalInfoComponent,
    SendRequestComponent,
    MorePersonalInfoComponent,
    CoverageInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignupRoutingModule,
    MaterialModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    MatProgressBarModule
  ],
  providers: [ProgressBarService]
})
export class SignupModule { }
