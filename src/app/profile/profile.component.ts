import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
