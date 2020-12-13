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
  errorMessage = "";

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: {username: string, password: string}): void {
    this.isLoading = true;
    this.errorMessage = "";
    this.userService.login(formValue).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.router.navigate(["/"]);
        // console.log(data);
      },
      error: (err) => {
        this.errorMessage = "Username or password is INCORRECT!!!";
        this.isLoading = false;
      }
    });
  }

}
