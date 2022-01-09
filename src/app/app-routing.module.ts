import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppearanceDataComponent } from './appearance-data/appearance-data.component';
import { BendingMachingComponent } from './bending-maching/bending-maching.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FullComponent } from './full/full.component';
import { LifePartnerComponent } from './life-partner/life-partner.component';
import { LoansComponent } from './loans/loans.component';
import { LoginComponent } from './login/login.component';
import { MaritalAdviceComponent } from './marital-advice/marital-advice.component';
import { MaritalDetailesComponent } from './marital-detailes/marital-detailes.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { NomResultComponent } from './nom-result/nom-result.component';
import { NominationComponent } from './nomination/nomination.component';
import { PremiumComponent } from './premium/premium.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ServiceComponent } from './service/service.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { VerifyNumsComponent } from './verify-nums/verify-nums.component';

const routes: Routes = [


  {path:"" ,redirectTo:"home" , pathMatch:"full" } , 
  {path:"home" , component:FullComponent} , 
  {path:"subscription" , component:SubscriptionComponent} , 
  {path:"marital-advice" , component:MaritalAdviceComponent} , 
  {path:"marital-detailes/:id" , component:MaritalDetailesComponent} , 
  {path:"loans" , component:LoansComponent} , 
  {path:"nomination" , component:NominationComponent} , 
  {path:"service" , component:ServiceComponent} , 
  {path:"premium" , component:PremiumComponent} , 
  {path:"nom-result" , component:NomResultComponent} , 
  {path:"login" , component:LoginComponent} , 
  {path:"register" , component:RegisterComponent} , 
  {path:"life-partner" , component:LifePartnerComponent} , 



  {path:"editProfile" , component:EditProfileComponent} , 
  {path:"change-password" , component:ChangePasswordComponent} , 


  {path:"profile" , component:ProfileComponent} , 
  {path:"appearanceData" , component:AppearanceDataComponent} , 
  {path:"bending-maching" , component:BendingMachingComponent} , 
  {path:"forgetPassword" , component:ForgetPasswordComponent} , 
  {path:"verify" , component:VerifyNumsComponent} , 
  {path:"newPassword" , component:NewPassComponent} , 
  {path:"search" , component:SearchComponent} , 

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
