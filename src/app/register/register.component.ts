import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from 'src/Validation/confirmPassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm=this.fb.group({
    UserName:['',[Validators.required,Validators.pattern('[a-zA-Z]*$')]],
    Email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$')]],
    Password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    SocialMedia:['',[Validators.required]]
    
  },{validator:[confirmPasswordValidator]})
  constructor(private fb:FormBuilder)
  {
    
  }
  get userName()
  {
   return this.registerForm.get('UserName')
  }

  get Email()
  {
   return this.registerForm.get('Email')
  }
  get Password()
  {
   return this.registerForm.get('Password')
  }
  get confirmPassword()
  {
   return this.registerForm.get('confirmPassword')
  }
  get SocialMedia()
  {
   return this.registerForm.get('SocialMedia')
  }

}
