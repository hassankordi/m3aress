import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {



  closeModal(){
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display ="none";
    // alert("closse");
  }
  openModal(){
    // alert("open");

    (document.getElementById("myModal") as HTMLElement).style.display ="block";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
