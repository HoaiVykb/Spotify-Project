import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm, loginForm } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isloading: boolean = false;
  constructor(private router: Router) {}
  Users: any[] = [
    {
      email: 'hoaivy10122004@gmail.com',
      password: '10122004',
    },
  ];
  login(form: loginForm) {
    for (let i = 0; i < this.Users.length; i++) {
      if (form.email == this.Users[i].email && form.password == this.Users[i].password) {
        this.isAuthenticated = true
        this.router.navigate([''])
        return
      }
    }
      alert('login not success')
      this.isAuthenticated = false
  }
  register(form: RegisterForm) {
    if (form.password != form.comfirm_password) {
      return;
    } else {
      this.Users.push(form);
      this.router.navigate(['login']);
      this.isAuthenticated = true;
    }
    console.log(this.Users);
  }
  logout() {
    this.router.navigate(['login']);
    this.isAuthenticated = false;
  }
}
