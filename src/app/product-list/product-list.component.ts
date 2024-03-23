import { Component, Input } from '@angular/core';
import { Products } from '../products';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() productList: Products[] = [];
  showRating(starRating: any) {
    alert(`${starRating}`);
  }
  formProduct = new FormGroup({
    productId: new FormControl<number>(1),
    productName: new FormControl<string>(''),
    productCode: new FormControl<string>(''),
    releaseDate: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
    starRating: new FormControl<number>(5),
    imageUrl: new FormControl<string>(''),
  });

  constructor(private prod: ProductsService) {
    this.productList = prod.getProduct();
   }
  file: string = '';
  IsAdd: Number = 1;
  IsUpdate: Number = 0;
  onChange(event: any) {
    var str = event.target.files[0].name;
    this.file = './assets/images/' + str;
  }
  Add() {
    this.formProduct.controls.productId.setValue(this.prod.getAutoId());
    this.prod.AddProduct(this.formProduct.value, this.file);
  }
  id: any;
  Edit(index: number) {
    this.id = index;
    this.formProduct.controls['productName'].setValue(
      this.prod.EditProduct(index).productName
    );
    this.formProduct.controls['productCode'].setValue(
      this.prod.EditProduct(index).productCode
    );
    this.formProduct.controls['releaseDate'].setValue(
      this.prod.EditProduct(index).releaseDate
    );
    this.formProduct.controls['price'].setValue(
      this.prod.EditProduct(index).price
    );
    this.formProduct.controls['description'].setValue(
      this.prod.EditProduct(index).description
    );
    this.file = this.prod.EditProduct(index).imageUrl;
  }
  Update() {
    this.prod.UpdateProduct(this.id, this.formProduct.value, this.file);
  }
  Delete(index: number) {
    this.prod.DeleteProduct(index);
  }
}
