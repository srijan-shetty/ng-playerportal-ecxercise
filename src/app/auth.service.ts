import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(formData) {
    return this.http.post('http://localhost:3000/api/items/login', formData);
  }

  set token(token: string) {
    localStorage.setItem('app_token', token);
  }
}
