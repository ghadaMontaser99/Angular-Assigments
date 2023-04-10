import { Component } from '@angular/core';
import { PostsService } from 'src/services/posts.service';
import { IPosts } from '../Shared-Classes-and-types/IPosts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  ListOfPosts:IPosts[]=[];
constructor(_posts:PostsService)
{
_posts.GetAllPosts().subscribe((data)=>{
  this.ListOfPosts=data;
},
(error)=>{console.log(error)})
}
}
