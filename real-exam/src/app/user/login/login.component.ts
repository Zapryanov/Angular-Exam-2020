import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  errorMessage: string = null;

  form = {
    username: {
      touched: false,
      value: ""
    },
    password: {
      touched: false,
      value: ""
    }
  }

  get showUsernameError(): boolean {
    return this.form.username.touched && this.form.username.value.length === 0;
  }

  get showPasswordError(): boolean {
    return this.form.password.touched && this.form.password.value.length === 0;
  }

  get hasFormErrors(): boolean {
    return this.form.username.value.length === 0 || this.form.password.value.length === 0;
  }

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  updateInputValue(name: 'username' | 'password', value): void {
    this.form[name].touched = true;
    this.form[name].value = value;
  }

  submitFormHandler(): void {
    const { username: { value: username}, password: { value: password} } = this.form;
    this.isLoading = true;
    this.errorMessage = "";
    this.userService.login({ username, password }).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.router.navigate(["/"]);
      },
      error: (err) => {
        this.errorMessage = "ERROR!!!"
        this.isLoading = false;
      }
    });
  }

}
