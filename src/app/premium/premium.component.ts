import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent implements OnInit {

  constructor() { }


  closeModal(){
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display ="none";
    // alert("closse");
  }
  openModal(){
    // alert("open");

    (document.getElementById("myModal") as HTMLElement).style.display ="block";
  }
  ngOnInit(): void {
  }

}
