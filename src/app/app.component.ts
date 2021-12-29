import { Component } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ma3ares';


  constructor(private AuthAPI:AuthorizationService){
    const token = localStorage.getItem("userToken")
    console.log(token);
    if(token== null){
      this.AuthAPI.isLogin.next(false)

    }else{
      this.AuthAPI.isLogin.next(true)

    }
    
  }



}
