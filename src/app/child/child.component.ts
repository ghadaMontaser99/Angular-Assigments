import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductServiceService } from 'src/services/product-service.service';
import { ProductsComponent } from '../products/products.component';
import {IProduct} from '../Shared-Classes-and-types/IProduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  
  @Output() childEvent=new EventEmitter();
  //@Input() productList:any;
 // productList :ProductsComponent=new ProductsComponent();
 productList:any=[];
 productById:any;
constructor(_ProductServiceService:ProductServiceService){
  this.productList=_ProductServiceService.GetAllProducts();
  this.productById=_ProductServiceService.GetProductById(2);
}
GetData()
{ 
  //this.productList.ProductList
  this.childEvent.emit(this.productList);
}

SayWelcome()
{
  console.log("Welcome :)")
}

}


