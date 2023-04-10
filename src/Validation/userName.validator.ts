import { AbstractControl } from "@angular/forms";

export function ForbiddenUserNameValidator(UserName:RegExp)
{
    return (control:AbstractControl)=>{
        const forbiddenName=UserName.test(control.value);
        return forbiddenName?{'UserName':{value:control.value}} :null;
    }
}