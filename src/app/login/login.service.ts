import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userIsAuthenticated = false;

  constructor() { }

  get userIsAuth() {
    return this.userIsAuthenticated;
  }

  get currentStatus() {
    return localStorage.getItem('login');
  }

  setUser(user) {
    localStorage.setItem('user', user);
  }

  login() {
    this.userIsAuthenticated = true;
    localStorage.setItem('login', this.userIsAuthenticated.toString());
  }

  logout() {
    this.userIsAuthenticated = false;
    localStorage.setItem('login', this.userIsAuthenticated.toString());
  }
}
