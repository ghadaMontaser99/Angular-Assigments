import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = 'myFirstProject';
 rr:any=[];
 IsClicked:boolean=false;
 @ViewChild(ProductsComponent) child!:ProductsComponent;
 ngAfterViewInit()
  {
    // this.child.renderValues();
  }
ff()
{
  this.rr=  this.child.renderValues();
  //return  this.rr
  if(this.IsClicked==false)
    {
      this.IsClicked=true;
    }
    else
    {
      this.IsClicked=false;
    }
}



}
