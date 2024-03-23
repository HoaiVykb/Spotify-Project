import { Component } from '@angular/core';
import { Products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { Cart } from '../carts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productDetail: Products | undefined;
  cartList: Cart[] = [];
  InStock: number = 0;

  constructor(private router: ActivatedRoute,
              private productService: ProductsService,
              private cartService: CartService) {
    this.cartList = cartService.getCartAll();
  }

  ngOnInit(): void {
    let id = Number(this.router.snapshot.params['id']);
    this.productDetail = this.productService.getProductId(id);
    this.InStock = this.productDetail?.inStock!;
  }

  Add() {
    this.cartService.addCart(this.productDetail?.productId!, this.productDetail);
    this.InStock = this.cartService.getInStock(this.productDetail?.productId!)!;
  }

  ItemCount() {
    return this.cartService.totalItems();
  }

  ItemSum() {
    return this.cartService.Total();
  }

  Remove(index: number) {
    this.cartService.RemoveCart(index);
  }

  DeleteAll() {
    this.cartService.DeleteAllCart();
  }

  playPause() {
    const audioElement = document.getElementById('audioElement') as HTMLAudioElement;
    const ctrlIcon = document.getElementById('ctrlIcon') as HTMLElement;

    if (audioElement.paused) {
      audioElement.play();
      ctrlIcon.classList.remove("bi-play-fill");
      ctrlIcon.classList.add("bi-pause-fill");
    } else {
      audioElement.pause();
      ctrlIcon.classList.remove("bi-pause-fill");
      ctrlIcon.classList.add("bi-play-fill");
    }
  }
}
