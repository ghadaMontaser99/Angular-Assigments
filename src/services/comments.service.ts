import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _HttpClient:HttpClient) { }
  GetAllCommentsByID(id:number):Observable<any>
  {
    return  this._HttpClient.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
}
