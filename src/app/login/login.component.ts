import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.authSubscription.unsubscribe();
  }

  onSubmit(formData) {
    this.authSubscription = this.authService.login(formData).subscribe(
      response => {
        console.log('Server response', response);
        this.router.navigate(['/home']);
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
