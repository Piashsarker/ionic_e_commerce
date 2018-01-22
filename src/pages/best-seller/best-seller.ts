import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductProvider} from "../../providers/product/product";

@Component({
  selector: 'page-about',
  templateUrl: 'best-seller.html'
})
export class BestSeller {
  public bestSellerProducts : any = [];

  constructor(public navCtrl: NavController, private productProvider: ProductProvider) {
    this.productProvider.getProduct()
            .subscribe((response)=> {
                this.bestSellerProducts = response.filter(product => product.best_seller == true);
                console.log(this.bestSellerProducts);
            }, (error)=> console.log(error));
  }


}
