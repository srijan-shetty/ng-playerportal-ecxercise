import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

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

  validateKey(control: AbstractControl): Observable<ValidationErrors> {}
}
