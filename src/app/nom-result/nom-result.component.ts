import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-nom-result',
  templateUrl: './nom-result.component.html',
  styleUrls: ['./nom-result.component.scss']
})
export class NomResultComponent implements OnInit {

   token:any = localStorage.getItem("userToken");
   inPackange:boolean;
   noNom:boolean;
 // token: any = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTmFkeTUyMDAiLCJVc2VySWQiOiI5MTA5OTQ5Yi1iN2NlLTQzYzEtYjBhNC0zZWEzMGM0NTUyZjciLCJSb2xlIjoiVXNlciIsImp0aSI6IjY0N2U3NGEwLTViMWMtNDZjYS1hYTdmLWQ5MGE3ODU4NjVmMCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJpZCI6IjkxMDk5NDliLWI3Y2UtNDNjMS1iMGE0LTNlYTMwYzQ1NTJmNyIsImV4cCI6MTY3MjI2MzIzNSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDA0MSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwNDEifQ.ag78PR2HAt450ZtOOVV6E7JzZi-IbDms2zkrFzHW1wk";
  nomResult: any = [] ;
  singleUserData:any = {
    name:" " , 
    results:[]
  };
  constructor(private Api: ApiService , private AuthAPI:AuthorizationService) {
    this.Api.getNominations(this.token).subscribe((res) => {

      this.nomResult = res.results
      // console.log();
      if(res.results.length == 0){
        this.noNom = true
      }
    }, (err) => {
      console.log(err);
    })


    this.AuthAPI.isUserSubscribeInPackage(this.token).subscribe((res)=>{
      console.log(res);
      this.inPackange = res.result

    } , (err)=>{console.log(err);
    })
  }

 
  

  
  closeModal() {
    (document.getElementById("myModal") as HTMLElement).style.display = "none";
  }
  openModal(item:any) {
    // alert(item.id)
    console.log(this.token);
    
    this.Api.getNominationsDetailes(this.token , item.id).subscribe((res) => {

      console.log(res);
      this.singleUserData = res
     
    }, (err) => {
      console.log(err);
    });
    
    (document.getElementById("myModal") as HTMLElement).style.display = "block";
  }

  changeStatus(data:any ,num){
    // userId
    // alert(num)
    console.log(data);
    
    this.Api.ChangeNominationsStatus(this.token , data ,num ).subscribe((res) => {

      console.log(res);
      this.singleUserData = res
     
    }, (err) => {
      console.log(err);
    });
    
  }

  ngOnInit(): void {
  }

}
