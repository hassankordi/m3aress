import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token: any = ""
  femaleTerms: any = ""
  sendData() {
    console.log(this.userData);
    this.AuthAPI.login(this.userData.value).subscribe((res) => {
      console.log(res);
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
            if(res.result){
              this.router.navigate(["/home"])
            }
            else{
              this.openModal();
            }
          }, (err) => {
            console.log(err);
          })
        }
        else {
          this.router.navigate(["/home"])
        }
      }

    }, (err) => {
      console.log(err);
    })

  }
  userData = new FormGroup({
    PHONE: new FormControl("", [Validators.required]),
    PASSWORD: new FormControl("", [Validators.required]),
    COUNTRYCODE: new FormControl("", [Validators.required]),
  })
  parentData = new FormGroup({
    name: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    countryCode: new FormControl("", [Validators.required]),
  })
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

  closeModal() {
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display = "none";
    // alert("closse");
  }

  openModal() {
    // alert("open");

    (document.getElementById("myModal") as HTMLElement).style.display = "block";
  }


  constructor(private AuthAPI: AuthorizationService, private router: Router, private API: ApiService) {
    // this.openModal()
   
    
    this.API.getApplicationInfo().subscribe((res) => {
      console.log(res);
      this.femaleTerms = res.termsAndConditionsForFemale;
      console.log(this.femaleTerms);

    }, (err) => {
      console.log(err);
    })
  }

  ngOnInit(): void {
    // this.openModal()
  }

}
