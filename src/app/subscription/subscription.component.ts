import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  isLogin:boolean ;
  lis: any = []
  Data: any = []
  bigImage:any = {
    image:"/" ,
    name:"//",
    id:0
  };
  imgUrl:any = environment.imagesUrl;
  modalData:any="";

  getSub(li: any) {
    console.log(li);
    this.Api.getSubscripstionsData(li.id).subscribe((res) => {
      console.log(res);
      this.Data = res
      this.bigImage=this.Data[0];
      console.log(this.bigImage);
      
      this.Data.splice(0,1)
      console.log(this.Data);
      
    }, (err) => {
      console.log(err);
    })

  }

  closeModal() {
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display = "none";
    // alert("closse");
  }
  openModal(x:any) {
    // alert("open");
    this.Api.getSubscripstionsDataDetailes(x.id).subscribe((res) => {
      console.log(res.desc);
      this.modalData = res
    //  this.modalData = res
      
    }, (err) => {
      console.log(err);
    }) ;
    
    (document.getElementById("myModal") as HTMLElement).style.display = "block";
  }
  constructor(private Api: ApiService , private AuthAPI:AuthorizationService) {
    this.Api.getSubscripstions().subscribe((res) => {
      console.log(res);
      this.lis = res

    }, (err) => {
      console.log(err);
    })

    this.Api.getSubscripstionsData(1).subscribe((res) => {
      console.log(res);
      this.Data = res
      this.bigImage=this.Data[0];
      console.log(this.bigImage);
      
      this.Data.splice(0,1)
      console.log(this.Data);
      
    }, (err) => {
      console.log(err);
    })

    const token = localStorage.getItem("userToken")
    if(token){
      this.AuthAPI.isLogin.next(true)

    }
    else{
      this.AuthAPI.isLogin.next(false)

    }
   this.isLogin= this.AuthAPI.isLogin.getValue()


  }

  ngOnInit(): void {
  }

}
