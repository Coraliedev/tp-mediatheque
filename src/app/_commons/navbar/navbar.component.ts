import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navList: any[] = [
    { nom: 'Home', lien: '/home' },
    { nom: 'Products', lien: '/products' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
