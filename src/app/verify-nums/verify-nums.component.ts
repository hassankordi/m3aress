import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-verify-nums',
  templateUrl: './verify-nums.component.html',
  styleUrls: ['./verify-nums.component.scss']
})
export class VerifyNumsComponent implements OnInit {

  phone:any = localStorage.getItem("Phone");
  counrtyCode:any = localStorage.getItem("CountryCode");

  codeData = new FormGroup({
    Phone: new FormControl(`${this.phone}`, []),
    countryCode: new FormControl(`${this.counrtyCode}`, []),
    code: new FormControl("", [Validators.required]),
  })

  sendVerifyCode(){
    console.log(this.counrtyCode);
    
    console.log(this.codeData);
    this.AuthAPI.sendCodeToRestesPass(this.codeData.value).subscribe((res)=>{
      console.log(res);
      
      this.router.navigate(["/newPassword"])
    } , (err)=>{
      alert("حدث خطأ حاول مرة اخرى")
      console.log(err);
    })

    
  }

  constructor(private API: ApiService, private AuthAPI: AuthorizationService ,private router:Router) { 
   this.phone= localStorage.getItem("Phone")
   this.counrtyCode= localStorage.getItem("CounrtyCode")
  }


  ngOnInit(): void {
  }

}
