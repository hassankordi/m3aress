import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  inPending:boolean = false;
  token: any = localStorage.getItem("userToken");
  apperanceLength: any = [];
  apperanceWeight: any = [];
  apperanceAppearances: any = [];
  apperanceBodyType: any = [];
  apperanceSkinColor: any = [];
  apperanceHairColor: any = [];
  apperanceHairLength: any = [];
  apperanceHairType: any = [];


  lifeStyleAge: any = [];
  lifeStyleSocialStatus: any = [];
  lifeStyleOccupation: any = [];
  lifeStyleNumberofChildren: any = [];
  lifeStyleMoreBoys: any = [];
  lifeStyleMarriageType: any = [];
  lifeStyleSmoke: any = [];


  Nationality: any = [];
  EducationStage: any = [];
  MotherLanguage: any = [];
  AnotherLanguages: any = [];
  Religion: any = [];
  ReligionValue: any = [];





  data: any = {}
  recomendationData: any = {}
  isLogin = this.AuthAPI.isLogin.getValue()


  userApperanceData1 = new FormGroup({
    length: new FormControl("", [Validators.required]),
    Weight: new FormControl("", [Validators.required]),
    Appearances: new FormControl("", [Validators.required]),
    BodyType: new FormControl("", [Validators.required]),
    SkinColor: new FormControl("", [Validators.required]),
    HairColor: new FormControl("", [Validators.required]),
    HairLength: new FormControl("", [Validators.required]),
    HairType: new FormControl("", [Validators.required]),

  })

  userApperanceData2 = new FormGroup({
    Age: new FormControl("", [Validators.required]),
    SocialStatus: new FormControl("", [Validators.required]),
    Occupation: new FormControl("", [Validators.required]),
    NumberofChildren: new FormControl("", [Validators.required]),
    MoreBoys: new FormControl("", [Validators.required]),
    MarriageType: new FormControl("", [Validators.required]),
    Smoke: new FormControl("", [Validators.required]),

  })
  userApperanceData3 = new FormGroup({
    Nationality: new FormControl("", [Validators.required]),
    EducationStage: new FormControl("", [Validators.required]),
    MotherLanguage: new FormControl("", [Validators.required]),
    AnotherLanguages: new FormControl("", [Validators.required]),
    Religion: new FormControl("", [Validators.required]),
    ReligionValue: new FormControl("", [Validators.required]),


  })

  sendData() {
    console.log(this.userApperanceData1.value);
    this.AuthAPI.addUserAppearance(this.userApperanceData1.value,
      this.userApperanceData2.value,
      this.userApperanceData3.value, this.token).subscribe((res) => {
        console.log(res);
        this.openModal()
      }, (err) => {
        console.log(err.error.messageError);
        if (err.error.messageError == 84) {
          // put
          this.AuthAPI.putUserAppearance(this.userApperanceData1.value,
            this.userApperanceData2.value,
            this.userApperanceData3.value, this.token).subscribe((res) => {
              console.log(res);
              this.openModal()

              // alert("updated success")
            }, (err) => {
              console.log(err);
            })
        }
      })

  }
  constructor(private API: ApiService, private AuthAPI: AuthorizationService, private router: Router) {

    const token = localStorage.getItem("userToken")
    this.token = token
    if (this.isLogin) {

      this.AuthAPI.getProfile(token).subscribe((res) => {
        console.log(res);
        this.data = res

      }, (err) => {
        console.log(err);
      })


      this.API.getApperance1(token).subscribe((res) => {
        console.log(res.results);
        res.results.forEach((element: any) => {
          if (element.properity == "Length") {
            this.apperanceLength = element
            console.log("my length" , this.apperanceLength);
          }
          if (element.properity == "Weight") {
            this.apperanceWeight = element
            // console.log("my Weight" , this.apperanceWeight);
          }
          if (element.properity == "Appearances") {
            this.apperanceAppearances = element
            // console.log("my Appearances" , this.apperanceAppearances);
          }
          if (element.properity == "Body Type") {
            this.apperanceBodyType = element
            // console.log("my Body Type" , this.apperanceBodyType);
          }
          if (element.properity == "Skin Color") {
            this.apperanceSkinColor = element
            // console.log("my Skin Color" , this.apperanceSkinColor);
          }
          if (element.properity == "Hair Color") {
            this.apperanceHairColor = element
            // console.log("my Hair Color" , this.apperanceHairColor);
          }
          if (element.properity == "Hair Length") {
            this.apperanceHairLength = element
            // console.log("my Hair Length" , this.apperanceHairLength);
          }
          if (element.properity == "Hair Type") {
            this.apperanceHairType = element
            // console.log("my  Hair Type" , this.apperanceHairType);
          }



        });


        // this.apperance = res.
      }, (err) => {
        console.log(err);
      })
      this.API.getApperance2(token).subscribe((res) => {
        console.log(res.results);
        res.results.forEach((element: any) => {
          if (element.properity == "Age") {
            this.lifeStyleAge = element
            // console.log("my age" , this.lifeStyleAge);
          }
          if (element.properity == "Social Status") {
            this.lifeStyleSocialStatus = element
            // console.log("my socila status" , this.lifeStyleSocialStatus);
          }
          if (element.properity == "Occupation") {
            this.lifeStyleOccupation = element
            // console.log("my Occupation" , this.lifeStyleOccupation);
          }
          if (element.properity == "Number of Children") {
            this.lifeStyleNumberofChildren = element
            // console.log("my Number of Children" , this.lifeStyleNumberofChildren);
          }
          if (element.properity == "More Boys") {
            this.lifeStyleMoreBoys = element
            // console.log("my More Boys" , this.lifeStyleMoreBoys);
          }
          if (element.properity == "Marriage Type") {
            this.lifeStyleMarriageType = element
            // console.log("my Marriage Type" , this.lifeStyleMarriageType);
          }
          if (element.properity == "Smoke") {
            this.lifeStyleSmoke = element
            // console.log("my Smoke" , this.lifeStyleSmoke);
          }

        });


        // this.apperance = res.
      }, (err) => {
        console.log(err);
      })
      this.API.getApperance3(token).subscribe((res) => {
        console.log(res.results);
        res.results.forEach((element: any) => {
          if (element.properity == "Nationality") {
            this.Nationality = element
            console.log("my Nationality", this.Nationality);
          }
          if (element.properity == "Education Stage") {
            this.EducationStage = element
            console.log("my EducationStage", this.EducationStage);
          }
          if (element.properity == "Mother Language") {
            this.MotherLanguage = element
            console.log("my MotherLanguage", this.MotherLanguage);
          }
          if (element.properity == "Another Languages") {
            this.AnotherLanguages = element
            console.log("my AnotherLanguages", this.AnotherLanguages);
          }
          if (element.properity == "Religion") {
            this.Religion = element
            console.log("my Religion", this.Religion);
          }
          if (element.properity == "Religion Value") {
            this.ReligionValue = element
            console.log("my Religion Value", this.ReligionValue);
          }


        });



      }, (err) => {
        console.log(err);
      })

      // console.log(this.apperanceLength.selectedText[0]);
      

    }
    else {
      alert("من فضلك سجل الدخول اولا")
      this.router.navigate(["/login"])

    }


    this.AuthAPI.isUserFillData(this.token).subscribe((res)=>{
      if(res.isHavePendingMatching){
        this.inPending = res.isHavePendingMatching
      }
      console.log(res);
    } , (err)=>{console.log(err);
    })


  }


  closeModal() {
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display = "none";
    // alert("closse");
  }
  openModal() {
    // alert("open");

    (document.getElementById("myModal") as HTMLElement).style.display = "block";
  }


  closeModal1() {
    // myModal
    (document.getElementById("myModal1") as HTMLElement).style.display = "none";
    // alert("closse");
  }
  openModal1() {
    // gender

    if(this.data.gender == true){
      alert(this.data.gender)
      this.API.systemRecomendations(this.token , 1).subscribe((res)=>{
        console.log(res);
        this.recomendationData = res.results ;
        (document.getElementById("myModal1") as HTMLElement).style.display = "block";
      } , (err)=>{
        if(err.error.messageError ==95){
          alert("ليس لديك ترشيحات لانك بالفعل قبلت مستخدم من الترشيحات")
        }
       else if(err.error.messageError ==92){
          alert("you are in pending maching now")
        }
       else if(err.error.messageError ==80){
          alert("please check if you completed your data")
        }
        else if(err.error.messageError ==96){
          alert("you don't have system recommendation now ")
        }
        console.log(err);
      });

    }else{
      // alert(this.data.gender)
      this.API.systemRecomendations(this.token , 0).subscribe((res)=>{console.log(res);
      } , (err)=>{
        // alert(err.error.messageError)
        if(err.error.messageError == 95){
          alert("ليس لديك ترشيحات لانك بالفعل قبلت مستخدم من الترشيحات")
        }
        else if(err.error.messageError == 92){
          alert("you are in pending maching now")
        }
        else if(err.error.messageError ==80){
          alert("please check if you completed your data")
        }
        else if(err.error.messageError ==96){
          alert("you don't have system recommendation now ")
        }
        // console.log(err);
      });
    }
    

    
  }


  acceptRecommendation(num){
    this.API.acceptSearch(this.token , this.recomendationData , num).subscribe((res)=>{
      console.log(res);
      
      if(res.messageSuccess==1){
        alert("تم");
        this.closeModal1()

      }
    } , (err)=>{
     
      console.log(err);
    })
  }
  ngOnInit(): void {
  }

}
