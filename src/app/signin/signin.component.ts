import { Component, OnInit } from '@angular/core';
import { faUser, faKey, faMailBulk, faCheck } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  faUser = faUser;
  faKey = faKey;
  faMailBulk = faMailBulk;
  faCheck = faCheck

  ngOnInit(){
    this.title = 'Welcome';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    
  }

}
