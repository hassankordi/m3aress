import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent implements OnInit {

  
  token: any = "";
  allData: any = {}
  isLogin = this.AuthApi.isLogin.getValue() ;
  singleUserData:any = {
    name:""
  };
  constructor(private API: ApiService, private AuthApi: AuthorizationService) {

    const token = localStorage.getItem("userToken")
    this.token = token
  }


  changeStatus(data:any ,num){
    // userId
    // alert(num)
    console.log(data);
    
    this.API.acceptSearch(this.token , data ,num ).subscribe((res) => {

      console.log(res);
      // this.singleUserData = res
     
    }, (err) => {
      console.log(err);
    });
    
  }

  closeModal() {
    (document.getElementById("myModal") as HTMLElement).style.display = "none";
  }
  openModal(item:any) {
    console.log(item.id);
    this.API.getPremiumPackagesDetails(this.token , item.id).subscribe((res)=>{
      console.log(res);
      this.singleUserData = res;

    } , (err)=>{console.log(err);
    });
    
    (document.getElementById("myModal") as HTMLElement).style.display = "block";
  }


  ngOnInit(): void {
    const token: any = localStorage.getItem('userToken');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    const decodedUserToken = helper.decodeToken(token);
    console.log(decodedUserToken);
    this.AuthApi.getProfile(token).subscribe((res) => {
      console.log(res);
      if (res.gender == false) {
        // send 0 in gender
        this.API.getPremiumPackages(this.token, 0).subscribe((res) => {
          this.allData = res
          console.log(res);
        }, (err) => {
          console.log(err);
        })
      }
      else {

        this.API.getPremiumPackages(this.token, 1).subscribe((res) => {
          console.log(res);
          this.allData = res
        }, (err) => {
          console.log(err);
        })
      }
    }, (err) => {
      console.log(err);
    })





  }
}
