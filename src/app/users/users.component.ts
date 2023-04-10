import { Component } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { IUsers } from '../Shared-Classes-and-types/IUsers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  ListOfsers:IUsers[]=[];

constructor(_UsersService:UsersService)
{
_UsersService.GetAllUsers().subscribe((data)=>{
  this.ListOfsers=data;
})
}
}
