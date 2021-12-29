import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.scss']
})
export class NewPassComponent implements OnInit {

  phone:any = localStorage.getItem("Phone");
  counrtyCode:any = localStorage.getItem("CountryCode");

  passData = new FormGroup({
    Phone: new FormControl(`${this.phone}`, []),
    countryCode: new FormControl(`${this.counrtyCode}`, []),
    newPassword: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
  })

  sendNewPass(){
    console.log(this.passData);
    this.AuthAPI.sendpassToRestesPass(this.passData.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(["/profile"])
    } , (err)=>{console.log(err);
    })

    
  }

  constructor(private API: ApiService, private AuthAPI: AuthorizationService ,private router:Router) { 
  
  }


  ngOnInit(): void {
  }

}
