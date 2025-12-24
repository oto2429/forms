import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordStrength]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordStrengthDirective),
      multi: true
    }
  ]
})
export class PasswordStrengthDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return null;

    const hasUppercase = /[A-Z]/.test(value);
    const hasDigit = /\d/.test(value);

    if (!hasUppercase || !hasDigit) {
      return {
        passwordStrength: 'Password must contain at least one uppercase letter and one number'
      };
    }

    return null;
  }
}
