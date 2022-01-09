import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  SearchCountryField,
  // TooltipLabel,
  CountryISO
} from "ngx-intl-tel-input";
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';


@Component({
  selector: 'app-nomination',
  templateUrl: './nomination.component.html',
  styleUrls: ['./nomination.component.scss']
})
export class NominationComponent implements OnInit {
  // subPackageName
  // SearchCountryField = SearchCountryField;
  // TooltipLabel = TooltipLabel;
  // CountryISO = CountryISO;
  // preferredCountries: CountryISO[] = [CountryISO.Qatar];

conntriesCodes=  ["+965", "+974", "+966", "+212", "+971", "+973", "+968", "+962", "+20", "+963", "+216", "+218", "+970",
            "+213", "+222", "+961", "+249", "+964", "+967", "+253", "+252", "+269"]
  counter: number = 1;
  token: any = localStorage.getItem("userToken");
  recId: any;
  // data: any = []
  isLogin = this.AuthAPI.isLogin.getValue()

  inviteData = new FormGroup({
    phone: new FormControl("", [Validators.required]),
    countryCode: new FormControl("", [Validators.required]),
    invitationsNumber: new FormControl(`${this.counter}`, [Validators.required])
  });

  // recipientId
  // "invitationsNumber":1,
  // "recipientId":"68550c52-ce55-4209-b1a5-6771b5be32db"
  sendInv() {
    this.openModal();
    this.API.sendNominationInv(this.token, this.inviteData.value).subscribe((res) => {
      console.log(res);
      this.recId = res.recipientId
    }, (err) => {
      console.log(err);
      if (err.error.messageError == 6) {
        alert("هذا المستخدم غير موجود")
      }
      else if (err.error.messageError == 67) {
        alert("يرجي التحقق انك مشترك في احدى الباقات ثم اعد المحاولة لاحقا")
      }
      this.closeModal()
    })
  }
  saveInv() {

    const obj = {
      "invitationsNumber": this.counter,
      "recipientId": this.recId

    }

    this.API.saveNominationInv(this.token, obj).subscribe((res) => {
      console.log(res);
      alert("message Success")
    }, (err) => {
      console.log(err);
      if (err.error.messageError == 33) {
        alert("حدث خطأ")
      }
    })
  }
  constructor(private API: ApiService, private AuthAPI: AuthorizationService, private router: Router) {

    const token = localStorage.getItem("userToken")
    this.token = token

  }
  ngOnInit(): void {

    // this.phoneForm.patchValue({
    //   number: "+97431422391",
    //   internationalNumber: "+974 3142 2391",
    //   nationalNumber: "3142 2391",
    //   countryCode: "QA",
    //   dialCode: "+974"
    // });
  }


  increase() {
    this.counter++;
  }
  discrease() {
    if (this.counter == 1) {

    }
    else {

      this.counter--;
    }


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

}
