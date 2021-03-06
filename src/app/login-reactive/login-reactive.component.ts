import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css'],
})
export class LoginReactiveComponent implements OnInit {
  loginForm: FormGroup;
  isLogged: boolean = false;

  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
    this._authService.loginStatus().subscribe((r) => {
      console.log(`Receiving ${r}`);
      this.isLogged = r;
    });
  }

  login(): void {
    this._authService.login();
  }

  logout(): void {
    this._authService.logout();
  }
}
