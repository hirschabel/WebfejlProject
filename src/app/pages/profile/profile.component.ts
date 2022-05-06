import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user?: User;
  user2?: User;

  username = new FormControl('');

  constructor(private ats: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
    }, error => {
      console.log(error);
    })
  }

  onUpdateUser() {
    if (this.username.value != "" && this.user) {
      this.user.username = this.username.value;
      this.userService.update(this.user);
      this.router.navigateByUrl('/main');
    }
  }

  onDeleteUser() {
    if (this.user) {
      this.userService.delete(this.user.id);
      this.ats.logout();
      this.router.navigateByUrl('/login');
    }
  }
}
