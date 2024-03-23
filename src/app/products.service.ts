import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  productsList: Products[] = [
    {
      productId: 1,
      productName: 'Equal: Global',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2016',
      description: 'Listen to woman at full volum.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: './assets/images/EQUAL-Global-June-Sara-James.png',
      inStock: 10,

    },
    {
      productId: 2,
      productName: 'Equal: Indie',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description: 'Some of the most mesmerizing voices.',
      price: 32.99,
      starRating: 4.2,
      imageUrl: './assets/images/ab67706f00000003d59cfd3cdb0fc6047ba4daba.png',
      inStock: 9,

    },
    {
      productId: 5,
      productName: 'Equal: Kpop',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description: 'From sultry vocalists, sexy divas to cutesy girl.',
      price: 8.9,
      starRating: 4.8,
      imageUrl: './assets/images/6c36e5_0c07549f6ed04b2185185742bd9602ee~mv2.png',
      inStock: 8,

    },
    {
      productId: 8,
      productName: 'Equal: Classical',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2016',
      description: 'Celebrate the great classical world.',
      price: 11.55,
      starRating: 3.7,
      imageUrl: './assets/images/ab67706f000000036fb93cfa8f1632c9894adcab.png',
      inStock: 7,

    },
    {
      productId: 10,
      productName: 'Equal: Anime',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description: 'アニメシーンを彩る女性アーティスト達を特集.',
      price: 35.95,
      starRating: 4.6,
      imageUrl: './assets/images/ab67706f000000020b0fe7e356a95ab07db64f04.png',
      inStock: 6,

    },
    {
      productId: 11,
      productName: 'Equal: New Age',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description: 'Classic and contemporary pioneers of New Age.',
      price: 35.950,
      starRating: 4.9,
      imageUrl: './assets/images/ab67706f00000003ea4317b08ef4de5ee09a5e88.png',
      inStock: 5,
    },
    {
      productId: 12,
      productName: 'Equal: Korea',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description: 'The greatest female voices in blues today.',
      price: 35.950,
      starRating: 4.9,
      imageUrl: './assets/images/E0MMAJ1VkAwmW1J.png',
      inStock: 5,
    },
  ];
// lat tat ca san pham
  getProduct() {
    return this.productsList;
  }
  // lay san pham rieng biet
  getProductId(id: number): Products | undefined {
    return this.productsList.find(i => i.productId == id);
  }
  // Tao id moi lon hon bat ki id nao ton tai.
  getAutoId() {
    var max = 1;
    this.productsList.forEach((item) => {
      if (item.productId > max) 
      max = item.productId;
    });
    return max+1;
  }

  AddProduct(frmProduct: any, fileImg: string) {
    let id = this.productsList.push(frmProduct) - 1;//tru 1 de lay sp moi duoc them vao
    this.productsList[id].imageUrl = fileImg;//gan file img vao imageUrl
  }

  EditProduct(index: number) {
    return this.productsList[index];
  }
  
  UpdateProduct(id: number, frmProduct: any, fileImg: string) {
    console.log(frmProduct.productName);
    this.productsList[id].productName = frmProduct.productName;
    this.productsList[id].productCode = frmProduct.productCode;
    this.productsList[id].releaseDate = frmProduct.releaseDate;
    this.productsList[id].price = frmProduct.price;
    this.productsList[id].description = frmProduct.description;
    this.productsList[id].imageUrl = fileImg;
  }
  DeleteProduct(index: number) {
    if (confirm('Do you want to delete')) this.productsList.splice(index, 1);
  }
}
