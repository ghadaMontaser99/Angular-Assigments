import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenUserNameValidator } from 'src/Validation/userName.validator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notesForm=this.fb.group({
    Name:['',[Validators.required,ForbiddenUserNameValidator(/admin/),ForbiddenUserNameValidator(/adminstrator/)]],
    productList:['',Validators.required],
    Hiddeninput:['',[Validators.required]],
    subscribe:[false],
    comment:this.fb.array([])

  })
  SetType:any="hidden";
    constructor(private fb:FormBuilder)
    {
      
    }

      get comment()
    {
      return this.notesForm.get('comment') as FormArray;
    }
    addAnotherComment()
    {
      this.comment.push(this.fb.control(''));
    }
    get Name()
    {
      return this.notesForm.get('Name');
    }
    get productList()
    {
      return this.notesForm.get('productList');
    }
    get Hiddeninput()
    {
      return this.notesForm.get('Hiddeninput');
    }
    showInput()
    {
      this.notesForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
        if(checkedValue)
        {
          this.SetType="number"
        }
        else
        {
          this.SetType="hidden"

        }
        this.Hiddeninput?.updateValueAndValidity();

      })
    }
}
