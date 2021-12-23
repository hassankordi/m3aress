import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './full/full.component';
import { SendUsComponent } from './send-us/send-us.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HeaderComponent } from './header/header.component';
import { MaritalAdviceComponent } from './marital-advice/marital-advice.component';
import { LoansComponent } from './loans/loans.component';
import { NominationComponent } from './nomination/nomination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ServiceComponent } from './service/service.component';
import { PremiumComponent } from './premium/premium.component';
import { NomResultComponent } from './nom-result/nom-result.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LifePartnerComponent } from './life-partner/life-partner.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { BendingMachingComponent } from './bending-maching/bending-maching.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyNumsComponent } from './verify-nums/verify-nums.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    SendUsComponent,
    SubscriptionComponent,
    HeaderComponent,
    MaritalAdviceComponent,
    LoansComponent,
    NominationComponent,
    ServiceComponent,
    PremiumComponent,
    NomResultComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    LifePartnerComponent,
    EditProfileComponent,
    ProfileComponent,
    BendingMachingComponent,
    ForgetPasswordComponent,
    VerifyNumsComponent,
    NewPassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxIntlTelInputModule,
    BsDropdownModule,
    NgxNavbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
