import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input()
films: any[]=[];
@Input()
albums: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
