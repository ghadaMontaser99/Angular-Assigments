import { AbstractControl } from "@angular/forms";

export function confirmPasswordValidator(control:AbstractControl)
{
    const Password=control.get('Password');
    const cofirmPassword=control.get('confirmPassword');

    if(Password?.pristine||cofirmPassword?.pristine)
    {
        return null;
    }
    else
    {
        return Password && cofirmPassword && Password.value!=cofirmPassword.value
        ? {'misMatch':true}
        :null;
    }
}