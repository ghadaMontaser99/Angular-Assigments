import { Component } from '@angular/core';
import {IProduct} from '../Shared-Classes-and-types/IProduct';
import {DiscountOffers} from '../Shared-Classes-and-types/DiscountOffers';
import {ICategory} from '../Shared-Classes-and-types/ICategory';
import { ProductServiceService } from 'src/services/product-service.service';
import { ActivatedRoute,  Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  [x: string]: any;
  Discount:DiscountOffers;
  Store_name:string;
  Store_Logo:string;//="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066__340.png"
  //ProductList:IProduct[];
  ProductList:any=[];

  CategoryList:ICategory[];
  ClientName:string;
  NoDicount:boolean=false;
  IsPurshased:boolean=false;
 
  constructor(private _ProductServiceService:ProductServiceService,private router:Router,private activatedRoute:ActivatedRoute)
  {

   
    this.Discount=DiscountOffers.NoDiscount;
    this.Store_name="Clothes Store";
    this.Store_Logo="https://cdn.pixabay.com/photo/2016/12/07/15/15/lotus-with-hands-1889661__340.png";
    //this.ProductList=[{"ID":1,"Name":"Dolce&Gabbana Dress","Quantity":50,"Price":1200,"Img":"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4b/P00645362.jpg"},
    //{"ID":2,"Name":"Simple T-shirt","Quantity":40,"Price":1000,"Img":"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}];
    this.CategoryList=[{"ID":1,"Name":"Dress"},{"ID":2,"Name":"T-shirt"}];
    this.ClientName=" ";
    this.ProductList=_ProductServiceService.GetAllProducts();
  {}
    


    if (this.Discount!=DiscountOffers.NoDiscount.toString())
    {
        this.NoDicount=true;
    }
   
  }
  buyMethod()
  {
    if(this.IsPurshased==false)
    {
      this.IsPurshased=true;
    }
    else
    {
      this.IsPurshased=false;
    }
  }

  renderValues()
  {
    return this._ProductServiceService.GetAllProducts()// this.ProductList;
  }
  
  withoutDiscount()
  {
    this.router.navigate(["withoutDiscount"],{relativeTo:this.activatedRoute});
  }
  withDiscount()
  {
    this.router.navigate(["withDiscount"],{relativeTo:this.activatedRoute});

  }


}
