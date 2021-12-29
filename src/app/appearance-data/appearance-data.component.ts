import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-appearance-data',
  templateUrl: './appearance-data.component.html',
  styleUrls: ['./appearance-data.component.scss']
})
export class AppearanceDataComponent implements OnInit {
  
  token: any = ""
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


data1:any=[]



  constructor(private API: ApiService, private AuthAPI: AuthorizationService, private router: Router) {

    const token = localStorage.getItem("userToken")
    this.token = token
   

      

      this.API.getApperance1(token).subscribe((res) => {
        console.log(res.results);
        this.data1 = res.results;

        res.results.forEach((element: any) => {
          if (element.properity == "Length") {
            this.apperanceLength = element
            // console.log("my length" , this.apperanceLength);
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
            // console.log("my Nationality", this.Nationality);
          }
          if (element.properity == "Education Stage") {
            this.EducationStage = element
            // console.log("my EducationStage", this.EducationStage);
          }
          if (element.properity == "Mother Language") {
            this.MotherLanguage = element
            // console.log("my MotherLanguage", this.MotherLanguage);
          }
          if (element.properity == "Another Languages") {
            this.AnotherLanguages = element
            // console.log("my AnotherLanguages", this.AnotherLanguages);
          }
          if (element.properity == "Religion") {
            this.Religion = element
            // console.log("my Religion", this.Religion);
          }
          if (element.properity == "Religion Value") {
            this.ReligionValue = element
            // console.log("my Religion Value", this.ReligionValue);
          }


        });



      }, (err) => {
        console.log(err);
      })

      // console.log(this.apperanceLength.selectedText[0]);
      

    
   

  }

  ngOnInit(): void {
  }

}
