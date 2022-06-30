import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
navList:any[]=[{nom:"Home",lien:"./app-home-page"},{nom:"Products",lien:"./app-products-page"}]
  constructor() { }

  ngOnInit(): void {
  }

}
