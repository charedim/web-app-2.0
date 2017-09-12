import {AbstractControl} from '@angular/forms';

export class PasswordValidation {
 // check in sgin up that password and confirm password are equal
    static MatchPassword(AC: AbstractControl) {
       const password = AC.get('password').value;                // to get value in input tag
       const confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors( {MatchPassword: true} );
        }
        else {
            return null;
        }
    }
}
