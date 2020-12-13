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
    if (formValue.password === formValue.rePassword) {
      this.userService.register(formValue).subscribe({
        next: (data) => {
          this.isLoading = false;
          this.router.navigate(["/"]);
        },
        error: (err) => {
          this.errorMessage = "Password and Re-Password do not match!";
          this.isLoading = false;
        }
      });
    } else {
      this.isLoading = false;
      this.errorMessage = "Password and Re-Password do not match!";
      return;
    }
  }

}
