import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  inHome: Boolean = false;
  inService: Boolean = false;
  inNomination: Boolean = false;
  navToggle: Boolean = false;
  constructor(private route:Router , private AuthApi:AuthorizationService) {}

  scrollToContact() {
    (document.getElementById('sendUs') as HTMLInputElement).scrollIntoView({
      behavior: 'smooth',
    });
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(["/home"])
    // console.log("log Out");
  }
  toggle() {
    this.navToggle = !this.navToggle;
  }
  router() {
    if (window.location.href.includes('home')) {
      (
        document.getElementById('nav-container') as HTMLElement
      ).style.backgroundColor = 'rgba(0,0,0,0.2)';
      // transparent
      (
        document.getElementById('nav-container') as HTMLElement
      ).style.backgroundImage = 'none';
      this.inHome = true;
    } else if (window.location.href.includes('service')) {
      this.inService = true;
    } else if (window.location.href.includes('nomination')) {
      this.inNomination = true;
    }
  }

  lang(lan){
    
    this.AuthApi.lang.next(lan)
    localStorage.setItem("lang" , lan)
  
  }

  ngOnInit(): void {
    this.router();
    console.log(window.location.href.includes('service'));
  }
}
