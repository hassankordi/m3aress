import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  allLists: any
  token: any;
  inPackange:boolean;
  fillData:boolean;
  searchResults: any =  [];
  gender = false ;
  singleUserData:any = {
    name:" " , 
    results:[]
  };
  constructor(private Api: ApiService, private AuthAPI: AuthorizationService , private router:Router) {
    const token = localStorage.getItem("userToken")
    this.token = token
    this.Api.getSearchDropDowns().subscribe((res) => {
      console.log(res);
      this.allLists = res
    }, (err) => {
     
      console.log(err);
    })


    this.AuthAPI.getProfile(this.token).subscribe((res) => {
      console.log(res);
      this.gender = res.gender 
      // alert(this.gender)
   
    }, (err) => {
      console.log(err);
    })


    this.AuthAPI.isUserSubscribeInPackage(token).subscribe((res)=>{
      console.log(res);
      this.inPackange = res.result

    } , (err)=>{console.log(err);
    })

    this.AuthAPI.isUserFillData(this.token).subscribe((res)=>{
      console.log(res);
      this.fillData = res
      if(res.isFillHisData ){
        this.fillData = true
      }else{
        this.fillData = false
      }

    } , (err)=>{console.log(err);
    })
  }

  searchData = new FormGroup({
    Age: new FormControl("", [Validators.required]),
    Appearances: new FormControl("", [Validators.required]),
    "Education Stage": new FormControl("", [Validators.required]),
    Nationality: new FormControl("", [Validators.required]),
    "Social Status": new FormControl("", [Validators.required]),


  })


  search() {
    console.log(this.searchData.value);
    if (this.gender == false) {
      // alert("is a male and want a female")
      console.log(this.token);
      
      this.Api.search(this.token, this.searchData.value, 0).subscribe((res) => {
        console.log(res);
        this.searchResults = res.results
      }, (err) => {
        console.log(err);
        if (err.error.messageError == 101) {
          alert("يجب الانتظار ساعة قبل عملية البحث الاخري");
        }
        else if(err.error.messageError == 80){
          alert("يجب اكمال البيانات قبل عمليات البحث")
          this.router.navigate(["/profile"])

        }
      })
    }
    else {
      // alert("is a female and want a male")
      console.log(this.token);

      this.Api.search(this.token, this.searchData.value, 1).subscribe((res) => {
        console.log(res);
        this.searchResults = res.results
      }, (err) => {
        console.log(err);
        if (err.error.messageError == 101) {
          alert("يجب الانتظار ساعة قبل عملية البحث الاخري");
        
        }
        if (err.error.messageError == 80) {
          alert("يجب اكمال البيانات قبل عمليات البحث")
        
        }
      })
    }
  }


  acceptSearch(data ,num){
    console.log(data);
    this.Api.acceptSearch(this.token, data ,num).subscribe((res)=>{
      console.log(res);
      if(res.messageSuccess ==1){
        alert("تم")
        this.closeModal()
      }
    } , (err)=>{console.log(err);
    })
    
  }

  closeModal() {
    (document.getElementById("myModal") as HTMLElement).style.display = "none";
  }
  openModal(item:any) {
    // alert(item.id)
    console.log(this.token);
  
    this.Api.getSearchSingleUserData(this.token , item.id).subscribe((res) => {

      console.log(res);
      this.singleUserData = res
     
    }, (err) => {
      console.log(err);
    });
    
    (document.getElementById("myModal") as HTMLElement).style.display = "block";
  }


  ngOnInit(): void {
  }

}
