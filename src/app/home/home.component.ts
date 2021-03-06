import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  // values: any; // dropdown values from DB

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getValues();  // dropdown values from DB
  }

  registerToggle() {
    // this.registerMode = !this.registerMode;
    this.registerMode = true;
  }

  // DROPDOWN from Database
  // getValues(){
  //   this.http.get('http://localhost:5000/api/values').subscribe(response => {
  //     this.values = response;
  //   }, error => {
  //         console.log(error);
  //   });
  // }

  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }

}
