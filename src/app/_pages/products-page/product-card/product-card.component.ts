import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  film: any={};
  @Input()
  album: any={};
  constructor() {
 
  }

  ngOnInit(): void {}
}
