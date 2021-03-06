import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  showSpinner = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}
  ngOnInit() {
    this.init();
  }

  init() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser() {
    this.showSpinner = true;

    this.authService.loginUser(this.loginForm.value).subscribe(
      data => {
        this.authService.setUser(data.user);
        this.tokenService.setToken(data.token);
        this.loginForm.reset();
        setTimeout(() => {
          this.router.navigate(['streams']);
        }, 1000);
      },
      err => {
        this.showSpinner = false;

        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
  }
}
