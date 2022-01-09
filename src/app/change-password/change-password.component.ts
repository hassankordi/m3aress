import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  phone:any = localStorage.getItem("Phone");
  counrtyCode:any = localStorage.getItem("CountryCode");
  token:any = localStorage.getItem("userToken");

  passData = new FormGroup({
    oldPassword: new FormControl(``, [Validators.required]),
    newPassword: new FormControl(``, [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
  })

  changePass(){
    // console.log(this.counrtyCode);
    // console.log(this.passData);
    this.AuthAPI.changePassword( this.token,this.passData.value).subscribe((res)=>{
      console.log(res);
     if(res.messageSuccess ==1){
       alert("تم")
     }


      
      this.router.navigate(["/profile"])
    } , (err)=>{console.log(err);
    })

    
  }

  constructor(private API: ApiService, private AuthAPI: AuthorizationService ,private router:Router) { 
   this.phone= localStorage.getItem("Phone")
   this.counrtyCode= localStorage.getItem("CounrtyCode")
  }

  ngOnInit(): void {
  }

}
