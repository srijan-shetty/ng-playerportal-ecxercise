import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginSubject = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loginSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(formData) {
    return this.http.post('http://localhost:3000/api/items/login', formData);
  }

  logout() {
    localStorage.removeItem('app_token');
    this.loginSubject.next(false);
  }

  set token(token: string) {
    localStorage.setItem('app_token', token);
    this.loginSubject.next(true);
  }
}
