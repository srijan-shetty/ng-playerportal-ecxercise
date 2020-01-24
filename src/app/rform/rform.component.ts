import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ValidationService } from '../validation.service';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['Default Name', [Validators.required, Validators.minLength(5)]],
      bio: ['Default Bio'],
      imageUrl: ['Default imageUrl'],
      key: ['Default Key', [Validators.required], this.validateKey.bind(this)]
    });
  }

  onSubmit() {
    console.log('Form submitted', this.form.value);
  }

  get name(): FormControl {
    return this.form.controls['name'] as FormControl;
  }

  validateKey(control: AbstractControl): Observable<ValidationErrors> {
    //  get the value of the control
    //  make a backend call
    //  once the result is received, make decision
    //  if validation succeeds, return null!
    //  if validation failes, return custom error

    let val = control.value;

    //  start the observable by creating one from the of operator
    //  build the pipeline by applying pipe operator
    //  use mergeMap to make a call to the backend endpoint
    //  use map to make the decision
    //  return the whole chain of observables

    return of(val).pipe(
      mergeMap(v => this.validationService.validateKey(v)),
      map(result => {
        if (result['valid']) {
          return null;
        } else {
          return { async_error: true };
        }
      })
    );
  }
}
