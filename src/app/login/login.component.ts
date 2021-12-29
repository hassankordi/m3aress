import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  sendData(){
    console.log(this.userData);
    this.AuthAPI.login(this.userData.value).subscribe((res)=>{
      console.log(res);
      if(res.token){
        alert("تم التسجيل بنجاح")
        console.log(res.token);
        localStorage.setItem("userToken",res.token)
        localStorage.setItem("gender",res.gender)
        this.AuthAPI.isLogin.next(true) 
        this.router.navigate(["/profile"])
        
      }

    },(err)=>{console.log(err);
    })
    
  }
  userData = new FormGroup({
    PHONE:new FormControl("",[Validators.required]),
    PASSWORD:new FormControl("",[Validators.required]),
    COUNTRYCODE:new FormControl("",[Validators.required]),
  })
  constructor(private AuthAPI:AuthorizationService , private router:Router) { }

  ngOnInit(): void {
  }

}
