import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  gender:any = null;
  // separateDialCode = false;
  // SearchCountryField = SearchCountryField;
  // CountryISO = CountryISO;
  // PhoneNumberFormat = PhoneNumberFormat;
  // preferredCountries: CountryISO[] = [
  //   CountryISO.UnitedStates,
  //   CountryISO.UnitedKingdom,
  // ];
  // phoneForm = new FormGroup({
  //   phone: new FormControl(undefined, [Validators.required]),
  // });

  // changePreferredCountries() {
  //   this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  // }

  
  sendData(){
    console.log(this.userData.value);
    this.AuthAPI.register(this.userData.value , this.gender).subscribe((res)=>{
      localStorage.setItem("userToken" , res.token)
      alert("تم التسجيل")
      this.router.navigate["/login"];
      

      console.log(res);
    },(err)=>{
      alert("لم يتم التسجيل حاول مرة اخري لاحقا")
      console.log(err);
    })

    
  }
  onSelect(){
    // this.gender = val;
    
   this.gender= (document.getElementById("gender") as HTMLSelectElement).value;
   alert(this.gender);

  }
  userData = new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    countryCode:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
    confirmPassword:new FormControl("",[Validators.required]),
    gender:new FormControl(`${this.gender}`,[Validators.required]),
  })
  constructor(private AuthAPI:AuthorizationService , private router:Router) { 
   
    
  }
  

  ngOnInit(): void {}
}
