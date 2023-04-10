import { Component } from '@angular/core';
import { ProductServiceService } from 'src/services/product-service.service';

@Component({
  selector: 'app-withoutdiscount',
  templateUrl: './withoutdiscount.component.html',
  styleUrls: ['./withoutdiscount.component.scss']
})
export class WithoutdiscountComponent {
  productWithoutDiscount:any[]=[];
  constructor(private _ProductServiceService:ProductServiceService)
  {
    //this.productWithoutDiscount=_ProductServiceService.GetProuductWihoutDiscount();
  }
}
