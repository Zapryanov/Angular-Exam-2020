import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoading = false;
  errorMessage = "";

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  registerHandler(formValue: {username: string, password: string, rePassword: string}): void {
    this.isLoading = true;
    this.errorMessage = "";
    this.userService.register(formValue).subscribe({
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
