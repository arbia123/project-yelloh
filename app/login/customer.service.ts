import { Injectable } from '@angular/core';
const COOKIE = 'COOKIE';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setCookie(cookie: string): void {
    localStorage.setItem(COOKIE, cookie);
  }

  isLogged() {
    return localStorage.getItem(COOKIE) != null;
  }
}
