import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
   
  messageFromChild:any;
  @ViewChild(ChildComponent) child!:ChildComponent;
 // child: ChildComponent = new ChildComponent;
  constructor()
  {
   
  }
  ngAfterViewInit()
  {
    this.child.SayWelcome();
  }


}
