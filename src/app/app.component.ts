import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from './api.service';
import { AuthorizationService } from './authorization.service';
import { Location } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ma3ares';
  location: Location;
  // {"+965", "+974", "+966", "+212", "+971", "+973", "+968", "+962", "+20", "+963", "+216", "+218", "+970",
  // "+213", "+222", "+961", "+249", "+964", "+967", "+253", "+252", "+269"}

  constructor(private AuthAPI:AuthorizationService , private API:ApiService){
    const token = localStorage.getItem("userToken")
    console.log(token);
    if(token== null){
      this.AuthAPI.isLogin.next(false)

    }else{
      this.AuthAPI.isLogin.next(true)


    }
    
  }


  ngOnInit() {
    if (environment.production) {
      if (location.protocol === 'http:') {
        window.location.href = location.href.replace('http', 'https');
      }
    }
    const token: any = localStorage.getItem('userToken');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    const decodedUserToken = helper.decodeToken(token);
  console.log(decodedUserToken);
  this.AuthAPI.getProfile(token).subscribe((res)=>{
    console.log(res);
    if(res.gender == false){
      // send 0 in gender
      this.API.getRandomPremium(1).subscribe((res)=>{console.log(res);
      },(err)=>{console.log(err);
      })
    }
    else{
      // send 1
      this.API.getRandomPremium(0).subscribe((res)=>{console.log(res);
      },(err)=>{console.log(err);
      })
    }
  },(err)=>{console.log(err);
  })
  

   

    
  }




}
