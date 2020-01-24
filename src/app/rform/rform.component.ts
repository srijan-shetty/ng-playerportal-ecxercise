import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      name: ['Default Name'],
      bio: ['Default Bio'],
      imageUrl: ['Default imageUrl']
    });
  }

  onSubmit() {
    console.log('Form submitted', this.form.value);
  }
}
