import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebfejlProject';
  loggedInUser?: firebase.default.User | null;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      //localStorage.setItem('user', 'hihi');
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.log(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }


  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }



  logout(_?: boolean) {
    this.authService.logout().then(() => {
      
    }).catch(error => {
      console.error(error);
    });
  }
}
