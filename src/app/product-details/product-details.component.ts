import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetail: Products | undefined
  constructor(private router: ActivatedRoute, private productService: ProductsService) { }
  ngOnInit(): void {
    let id = Number(this.router.snapshot.params['id'])
    this.productDetail = this.productService.getProductId(id)
  }
}
