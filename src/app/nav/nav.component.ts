import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}; // this object will store username and password

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    // console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully')
    }, error => {
      // console.log('Failed to login');
      console.log(error);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;        // !! - returns a true or false value, shorthand for if statement
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out')
  }

}
