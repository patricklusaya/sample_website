import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;

toggleMenu() {
this.isMenuOpen = !this.isMenuOpen;
const ul = document.querySelector('nav ul');
  if (ul) {
    ul.classList.toggle('active');
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
