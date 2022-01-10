import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  gender: any = null;
  token: any = "";
  femaleTerms: any = "";
  conntriesCodes = ["+965", "+974", "+966", "+212", "+971", "+973", "+968", "+962", "+20", "+963", "+216", "+218", "+970",
    "+213", "+222", "+961", "+249", "+964", "+967", "+253", "+252", "+269"]
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

  parentData = new FormGroup({
    name: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    countryCode: new FormControl("", [Validators.required]),
  })

  closeModal() {
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display = "none";
    // alert("closse");
  }

  openModal() {
    // alert("open");

    (document.getElementById("myModal") as HTMLElement).style.display = "block";
  }

  sendParentData() {
    this.AuthAPI.fillParentData(this.token, this.parentData.value).subscribe((res) => {
      console.log(res);
      if (res.messageSuccess == 1) {
        alert("تم");
        this.closeModal()
        this.router.navigate(["/home"])
      }
    }, (err) => {
      console.log(err);
    })
  }


  sendData() {
    console.log(this.userData.value);
    this.AuthAPI.register(this.userData.value, this.gender).subscribe((res) => {

      if (res.token) {
        alert("تم التسجيل بنجاح")
        this.token = res.token
        console.log(res.token);
        localStorage.setItem("userToken", res.token)
        localStorage.setItem("gender", res.gender)
        localStorage.setItem("userId", res.userId)
        this.AuthAPI.isLogin.next(true)
        if (res.gender == true) {
          // open pop up
          // write your logic if female is fill his data
          this.AuthAPI.isFemaleFillGuardianData(this.token).subscribe((res) => {
            console.log(res);
            if (res.result) {
              this.router.navigate(["/home"])
            }
            else {
              this.openModal();
              // this.openModal();
            }
          }, (err) => {
            console.log(err);
          })
        }
        else {
          this.router.navigate(["/home"])
        }
      }

      // localStorage.setItem("userToken", res.token)
      // alert("تم التسجيل")
      // // this.router.navigate["/login"];
      // this.router.navigate(["/home"])


      console.log(res);
    }, (err) => {
      alert("لم يتم التسجيل حاول مرة اخري لاحقا")
      console.log(err);
    })


  }

  // this.AuthAPI.login(this.userData.value).subscribe((res) => {
  //   console.log(res);
  //   if (res.token) {
  //     alert("تم التسجيل بنجاح")
  //     this.token = res.token
  //     console.log(res.token);
  //     localStorage.setItem("userToken", res.token)
  //     localStorage.setItem("gender", res.gender)
  //     localStorage.setItem("userId", res.userId)
  //     this.AuthAPI.isLogin.next(true)
  //     if (res.gender == true) {
  //       // open pop up
  //       // write your logic if female is fill his data
  //       this.AuthAPI.isFemaleFillGuardianData(this.token).subscribe((res) => {
  //         console.log(res);
  //         if(res.result){
  //           this.router.navigate(["/home"])
  //         }
  //         else{
  //           this.openModal();
  //         }
  //       }, (err) => {
  //         console.log(err);
  //       })
  //     }
  //     else {
  //       this.router.navigate(["/home"])
  //     }
  //   }

  // }, (err) => {
  //   console.log(err);
  // })
  onSelect() {
    // this.gender = val;

    this.gender = (document.getElementById("gender") as HTMLSelectElement).value;
    //  alert(this.gender);

  }
  userData = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    countryCode: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
    confirmPassword: new FormControl("", [Validators.required]),
    gender: new FormControl(`${this.gender}`, [Validators.required]),
  })
  constructor(private AuthAPI: AuthorizationService, private router: Router, private API: ApiService) {

    this.API.getApplicationInfo().subscribe((res) => {
      console.log(res);
      this.femaleTerms = res.termsAndConditionsForFemale;
      console.log(this.femaleTerms);

    }, (err) => {
      console.log(err);
    })
  }


  ngOnInit(): void { }
}
