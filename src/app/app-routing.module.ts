import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { WithdiscountComponent } from './withdiscount/withdiscount.component';
import { WithoutdiscountComponent } from './withoutdiscount/withoutdiscount.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
{ path:'Home',component:HomeComponent},
{path:'Products',component:ProductsComponent
,children:[{path:'withDiscount',component:WithdiscountComponent},
{path:'withoutDiscount',component:WithoutdiscountComponent}]},
{path:'Users',component:UsersComponent},
{path:'Posts',component:PostsComponent},
{path:'Comments/:id',component:CommentsComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'notes',component:NotesComponent},
{path:'**',component:NotfoundpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
