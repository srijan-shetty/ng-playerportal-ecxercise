import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Directive({
  selector: '[appMinlengthClone]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinlengthCloneDirective,
      multi: true
    }
  ]
})
export class MinlengthCloneDirective implements Validator {
  @Input() appMinlengthClone: number;

  validate(control: AbstractControl): ValidationErrors {
    let length = 0;

    if (control.value) {
      length = +control.value.length;
    }

    if (length < this.appMinlengthClone) {
      return {
        minLengthClone: {
          requiredLength: this.appMinlengthClone,
          actualLength: length
        }
      };
    } else {
      return null;
    }
  }
  registerOnValidatorChange?(fn: () => void): void {}

  constructor() {}
}
