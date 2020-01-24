import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

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
  constructor() {}
}
