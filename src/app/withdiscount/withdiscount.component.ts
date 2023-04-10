import { Component } from '@angular/core';
import { ProductServiceService } from 'src/services/product-service.service';

@Component({
  selector: 'app-withdiscount',
  templateUrl: './withdiscount.component.html',
  styleUrls: ['./withdiscount.component.scss']
})
export class WithdiscountComponent {
  productWithDiscoint:any=[];
  constructor(private _ProductServiceService:ProductServiceService)
  {
   // this.productWithDiscoint=_ProductServiceService.GetProductWithDiscount();

  }
}
