import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

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

  gender: any = localStorage.getItem("gender");
  isFemale: boolean ;
  partnerData: any = {}
  token: any = localStorage.getItem("userToken")
  constructor(private API: ApiService, private route: Router) {
    alert(this.gender);
    alert(this.isFemale);
    this.isFemale = Boolean(this.gender) ;
    alert(this.isFemale);
    console.log(this.isFemale);
    
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
    }, (err) => {
      console.log(err);
    })
  }
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
