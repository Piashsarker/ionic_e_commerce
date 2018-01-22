import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductProvider} from "../../providers/product/product";
import {ProductDetailsPage} from "../product-details/product-details";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allProduct : any = [];
  constructor( private productProvider : ProductProvider,
              public navCtrl: NavController
              ) {

  }

  ionViewDidLoad(){
        this.productProvider.getProduct().subscribe(
          (response)=> {
             this.allProduct = response ;
          },
          error => console.log(error)
        );
  }

  gotoProductDetails(product) {
  this.navCtrl.push(ProductDetailsPage ,
    {product_details: product}
    );
  }
}
