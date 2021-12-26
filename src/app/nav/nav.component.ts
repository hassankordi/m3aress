import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  scrollToContact() {
    (document.getElementById('sendUs') as HTMLInputElement).scrollIntoView({
      behavior: 'smooth',
    });
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

  ngOnInit(): void {
    this.router();
    console.log(window.location.href.includes('service'));
  }
}
