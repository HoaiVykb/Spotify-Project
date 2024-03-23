import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searching: string = ''
  filterProductList: Products[] = []

  product: any[] = [];

  constructor(private prod: ProductsService) {
    this.filterProductList = prod.getProduct();
    this.product = prod.getProduct();
  }

  filterResults() {
    console.log(this.searching)
    if (!this.searching) {
      this.filterProductList = this.product
    }
    this.filterProductList = this.product.filter(
      list => list?.productName.toLowerCase().includes(this.searching.toLowerCase())
    )
  }
}
