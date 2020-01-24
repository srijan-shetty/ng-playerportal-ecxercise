import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.authSubscription.unsubscribe();
  }

  onSubmit(formData) {
    this.authSubscription = this.authService.login(formData).subscribe(
      response => {
        console.log('Server response', response);
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('Completed');
      }
    );
  }
}
