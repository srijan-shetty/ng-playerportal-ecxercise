import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private helper = new JwtHelperService();

  private loginSubject = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loginSubject.asObservable();

  decodedToken = this.helper.decodeToken(localStorage.getItem('app_token'));

  constructor(private http: HttpClient) {
    console.log(this.decodedToken);
  }

  login(formData) {
    return this.http.post('http://localhost:3000/api/items/login', formData);
  }

  logout() {
    localStorage.removeItem('app_token');
    this.loginSubject.next(false);
  }

  get roles(): string[] {
    return this.decodedToken['roles'];
  }

  set token(token: string) {
    localStorage.setItem('app_token', token);
    this.loginSubject.next(true);
  }
}
