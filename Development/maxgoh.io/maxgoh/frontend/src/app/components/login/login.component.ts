import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  rememberMeToggle: boolean = false;

  constructor(
    private _authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.createLoginForm();
  }

  ngOnInit() {}

  authenticate(username: string, password: string) {
    this._authService.login(username, password)
      .subscribe(
        data => {
          if (this.rememberMeToggle === true) {
            localStorage.setItem('jwt', JSON.stringify({ authtoken: data.auth_token }));
          }
          if (data.status === "success") {
            this.router.navigate(['/admin']) ;
          }

        }
      );
  };

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
      rememberMeToggle: false,
    });
  };
}
