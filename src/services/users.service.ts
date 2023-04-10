import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUsers } from 'src/app/Shared-Classes-and-types/IUsers';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

  GetAllUsers():Observable<any>
  {
    return  this._HttpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
