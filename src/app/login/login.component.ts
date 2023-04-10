import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



 loginForm=this.fb.group({
  Email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$')]],
  Password:['',[Validators.required]]
})
  constructor(private fb:FormBuilder)
  {
    
  }
  get Email()
  {
    return this.loginForm.get('Email');
  }

  get Password()
  {
    return this.loginForm.get('Password');
  }

}
