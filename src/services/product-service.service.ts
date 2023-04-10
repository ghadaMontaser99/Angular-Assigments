import { Injectable } from '@angular/core';
import { DiscountOffers } from 'src/app/Shared-Classes-and-types/DiscountOffers';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
productList:any=[];
prod:any;
msg:any;
//productDiscountList:any=[];
//productWithoutDiscounttList:any=[];
  constructor() {
    this.productList=[{"ID":1,"Name":"Dolce&Gabbana Dress","Quantity":50,"Price":1200,"Img":"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4b/P00645362.jpg"},
    {"ID":2,"Name":"Simple T-shirt","Quantity":40,"Price":1000,"Img":"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}];
  }
   
  GetAllProducts()
  {
    return this.productList;
  }
  GetProductById(prdId: any)
  {
    if(!isNaN(prdId))
    {
    
      this.productList.forEach((element:any) => {
        if(element.ID==prdId)
        {
          this.prod=element.Name;
          
        }
      });
     if( this.prod==null)
     {
     this.msg="Can't find this product";
      return this.msg;
     }
     else{
      return this.prod;
     }
    }
    else{
      this.msg="Please enter valid ID";
      return this.msg;
    }
    
  }
 /* GetProductWithDiscount()
  {
    this.productList.forEach((element:any) => {
      if(element.DiscountOffers!=DiscountOffers.NoDiscount)
      {
        this.productDiscountList.push(element);
      }
    });
    return this.productDiscountList;
  }
  GetProuductWihoutDiscount()
  {
    this.productList.forEach((element:any) => {
      if(element.DiscountOffers==DiscountOffers.NoDiscount)
      {
       this.productWithoutDiscounttList.push(element);
      }
    });
    return  this.productWithoutDiscounttList;
  }*/
}
