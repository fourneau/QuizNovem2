import { Component, OnInit } from '@angular/core';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  faUser = faUser;
  faKey = faKey;
  loginForm!: FormGroup;
  submitted!: boolean;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(6)]],
    },
    {
      validator: MustMatch('password','password')
    });
  }
  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
     return alert('errors!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
      
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    console.log('Données du formulaire', this.loginForm.value)
}

onReset() {
    this.submitted = false;
    this.loginForm.reset();
}

}
