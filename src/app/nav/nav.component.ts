import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  inHome:Boolean= false;
  inService:Boolean= false;
  inNomination:Boolean= false;
  constructor() {
  }
  
  scrollToContact(){
    (document.getElementById("sendUs") as HTMLInputElement).scrollIntoView({
      behavior: "smooth"
    })
  }

  router() {
    if (window.location.href.includes('home')) {
      (document.getElementById("nav-container") as HTMLElement).style.backgroundColor = "transparent";
      (document.getElementById("nav-container") as HTMLElement).style.backgroundImage = 'none';
      this.inHome = true;
    }
    else if(window.location.href.includes('service')){
      this.inService = true;
    }
    else if(window.location.href.includes('nomination')){
      this.inNomination = true;
    }
  }

  scroll(){

  }

  ngOnInit(): void {
    // if (window.location.href.includes('service')) {
    //   this.tabChange = 'Time Line';
    // } else if (window.location.href.includes('Product&Scrap')) {
    //   this.tabChange = 'Product & Scrap';
    // }
    this.router()
    console.log(window.location.href.includes('service'));

  }

}
