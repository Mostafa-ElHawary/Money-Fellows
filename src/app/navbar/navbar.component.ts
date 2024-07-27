import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  nav: string[] = ['Home', 'Features', 'FAQs', 'Contact Us', 'Careers'];
  imgSrc = './assets/Logo.svg';
  isNavOpen: boolean = false;
  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
