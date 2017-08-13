import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  signIn() {
    this.authService.login({ email: this.email, password: this.password })
      .then(resolve => this.router.navigate(['gallery']))
      .catch(error => this.errorMsg = error.message);
  }
}
