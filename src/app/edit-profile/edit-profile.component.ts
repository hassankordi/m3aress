import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  gender:any = "";
  token:any = ""
  sendData(){
    console.log(this.userData);
    this.AuthAPI.editProfile(this.token,this.userData.value , this.gender).subscribe((res)=>{
      // localStorage.setItem("userToken" , res.token)
      alert("تم التسجيل")
      // this.router.navigate["/login"];
      

      console.log(res);
    },(err)=>{
      alert("لم يتم التسجيل حاول مرة اخري لاحقا")
      console.log(err);
    })

    // after edit (router on profile)



    
  }
  userData = new FormGroup({
    FirstName:new FormControl("",[Validators.required]),
    FamilyName:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    countryCode:new FormControl("",[Validators.required]),
    guardianFemaleName:new FormControl("name",[Validators.required ]),
    guardianFemalePhone:new FormControl("phone",[Validators.required]),
    guardianFemaleCountryCode:new FormControl("code",[Validators.required]),
  })
  constructor(private AuthAPI:AuthorizationService , private router:Router) {
    // alert(this.gender)
     this.token = localStorage.getItem('userToken');
    this.gender = localStorage.getItem('gender');
    // alert(this.gender)
    console.log(this.gender);
    

   }
  

   ngOnInit(): void {
    const token: any = localStorage.getItem('userToken');
    
    
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);

    // if (token &&!isExpired) {
    //   const decodedUserToken = helper.decodeToken(token);
    //   console.log(decodedUserToken);
    //   // this._UserService.isLogin = true;
    //   // this._Router.navigate(['/profile'])
    
      


     

    // } else {
    //   // if there is no user token then router to login

    //   // this._Router.navigate(['/home'])

    // }

    
  }


}
