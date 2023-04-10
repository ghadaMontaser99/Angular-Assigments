import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  listOfComments:any[]=[]
  CurrentID:number;
constructor(_comments:CommentsService,_ActivatedRoute:ActivatedRoute)
{
 this.CurrentID= _ActivatedRoute.snapshot.params['id'];
  _comments.GetAllCommentsByID(this.CurrentID).subscribe((data)=>{
    this.listOfComments=data;
  })
}
}
