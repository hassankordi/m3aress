import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  SearchCountryField,
  // TooltipLabel,
  CountryISO
} from "ngx-intl-tel-input";


@Component({
  selector: 'app-nomination',
  templateUrl: './nomination.component.html',
  styleUrls: ['./nomination.component.scss']
})
export class NominationComponent implements OnInit {
  
  counter:number = 1;
  
  increase(){
   this.counter++;
  }
  discrease(){
    if(this.counter ==1){

    }
    else{

      this.counter--;
    }
   
    
   }


   closeModal(){
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display ="none";
    // alert("closse");
  }
  openModal(){
    // alert("open");

    (document.getElementById("myModal") as HTMLElement).style.display ="block";
  }


  SearchCountryField = SearchCountryField;
  // TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Qatar];
  phoneForm = new FormGroup({
    phone: new FormControl("", [Validators.required])
  });
  constructor() { }

  ngOnInit(): void {

    this.phoneForm.patchValue({
      number: "+97431422391",
      internationalNumber: "+974 3142 2391",
      nationalNumber: "3142 2391",
      countryCode: "QA",
      dialCode: "+974"
    });
  }

}
