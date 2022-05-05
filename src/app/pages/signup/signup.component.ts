import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    username: new FormControl('')
  });

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
        const user: User = {
          id: cred.user?.uid as string,
          email: this.signUpForm.get('email')?.value,
          username: this.signUpForm.get('username')?.value,
        };
        this.userService.create(user).then(_ => {

        }).catch(error => {
          console.log(error);
        });
    }).catch(error => {
      console.error(error);
    });
  }

  goBack(): void {
    
  }

}
