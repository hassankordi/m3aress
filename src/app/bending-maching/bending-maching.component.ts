import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-bending-maching',
  templateUrl: './bending-maching.component.html',
  styleUrls: ['./bending-maching.component.scss']
})
export class BendingMachingComponent implements OnInit {
  // HEROES: any = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6,
  //   7, 8, 9, 10,
  // ];
  // stepSide: number = 1;
  // timeStep: string = 'side-stepper-circle';
  // machineStep: string = 'side-stepper-circle';
  // resourceStep: string = 'side-stepper-circle';
  // tapSidename: string = 'Set Time';

  diff:any = [{
    key:"",
    value:""
  }]
  inPackange:boolean;
  gender: any = localStorage.getItem("gender");
  isFemale: boolean ;
  partnerData: any = {}
  token: any = localStorage.getItem("userToken")
  constructor(private API: ApiService, private route: Router , private AuthAPI:AuthorizationService) {
    this.AuthAPI.isUserSubscribeInPackage(this.token).subscribe((res)=>{
      console.log(res);
      this.inPackange = res.result

    } , (err)=>{console.log(err);
    })
    // alert(this.gender);
    // alert(this.isFemale);
    // this.isFemale = this.gender ;
    // // this.isFemale = Boolean(this.isFemale)
    // alert(this.isFemale);
    // console.log(this.isFemale);
    if(this.gender =="false"){
      this.isFemale = false

    }
    else{
      this.isFemale = true

    }
    // if (this.gender == false) {
    //   // female 
    //   this.isFemale = true

    // } else {
    //   this.isFemale = false
    // }

    this.API.getBendingMaching(this.token).subscribe(
      (res) => {
        console.log(res);
        this.partnerData = res
      }, (err) => {

        console.log(err.error.messageError);
        if (err.error.messageError == 90) {
          alert("You Are Not In Pending Maching Now");
          this.route.navigate(["/profile"])


        }


      })
  }


  changePendingStatus(data, num) {
    this.API.ChangePendingStatus(this.token, data, num).subscribe((res) => {
      console.log(res);
      if(res.messageSuccess ==1){
        alert("تم")
      }
    }, (err) => {
      console.log(err);
    })
  }

  getDiff(){
    
    this.API.getNominationsDetailes(this.token ,this.partnerData.id ).subscribe((res)=>{
      this.openModal1()
      console.log(res);
      this.diff = res.results
    } , (err)=>{console.log(err);
    })
  }
  

  closeModal1() {
    // myModal
   
    (document.getElementById("myModal1") as HTMLElement).style.display = "none";
    // alert("closse");
  }
  openModal1() {
    // alert("open");

    (document.getElementById("myModal1") as HTMLElement).style.display = "block";


  }
  // premiumDetails(id) {
  //   console.log(id);
  //   this.API.getRandomPremiumDetailes(this.token, id).subscribe((res) => {
  //     console.log(res);
  //     this.randomDataDetailes = res;
  //     this.togglePremiumDetails = true;
  //   }, (err) => {
  //     console.log(err);
  //     if (err.error.messageError == 60) {
  //       this.togglePremiumDetails = false;
  //       alert("يرجي التاكد انك مشترك في احدي الباقات");
  //       this.router.navigate(["/subscription"])


  //     }
  //     if (err.error.messageError == 78) {
  //       this.togglePremiumDetails = false;
  //       alert("error in return premium subscription details or you are don't have nominations ");
  //       this.router.navigate(["/subscription"])


  //     }
  //   })

  // }
  ngOnInit(): void { }
  // sideStepper(stepNumber) {
  //   this.stepSide = stepNumber;
  //   if (stepNumber == 1) {
  //     this.timeStep = 'side-stepper-circle';
  //     this.machineStep = 'side-stepper-circle';
  //     this.resourceStep = 'side-stepper-circle';
  //   } else if (stepNumber == 2) {
  //     this.timeStep = 'side-stepper-circle-active';
  //     this.machineStep = 'side-stepper-circle';
  //     this.resourceStep = 'side-stepper-circle';
  //   } else if (stepNumber == 3) {
  //     this.timeStep = 'side-stepper-circle-done';
  //     this.machineStep = 'side-stepper-circle-active';
  //     this.resourceStep = 'side-stepper-circle';
  //   } else if (stepNumber == 4) {
  //     this.timeStep = 'side-stepper-circle-done';
  //     this.machineStep = 'side-stepper-circle-done';
  //     this.resourceStep = 'side-stepper-circle-active';
  //   } else {
  //     this.timeStep = 'side-stepper-circle-done';
  //     this.machineStep = 'side-stepper-circle-done';
  //     this.resourceStep = 'side-stepper-circle-done';
  //   }
  // }

  // tapSide(tap) {
  //   this.tapSidename = tap;
  // }
}
