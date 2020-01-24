import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  onSubmit(formData) {
    this.authSubscription = this.authService.login(formData).subscribe(
      response => {
        console.log('Server response', response);
        //  store the token in local storage
        this.authService.token = response['token'];

        const url = this.ar.snapshot.queryParamMap.get('returnUrl');

        if (url) {
          console.log(url);
          this.router.navigateByUrl(url);
        } else {
          this.router.navigate(['/portal']);
        }
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
