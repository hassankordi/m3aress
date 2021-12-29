import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {


 


  
  phoneData = new FormGroup({
    Phone: new FormControl("", [Validators.required]),
    CountryCode: new FormControl("", [Validators.required]),
  })

  sendVerifyCode(){
    console.log(this.phoneData);
    this.AuthAPI.sendNumToRestesPass(this.phoneData.value).subscribe((res)=>{
      console.log(res);
      localStorage.setItem("Phone" ,this.phoneData.value.Phone )
      localStorage.setItem("CountryCode" ,this.phoneData.value.CountryCode )
      this.router.navigate(["/verify"])
    } , (err)=>{console.log(err);
    })

    
  }

  constructor(private API: ApiService, private AuthAPI: AuthorizationService ,private router:Router) { }

  ngOnInit(): void {
  }

}
