import { Component, OnInit } from '@angular/core';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  faUser = faUser;
  faKey = faKey;
  

  ngOnInit(){
    this.title = 'Welcome';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
  }

}
