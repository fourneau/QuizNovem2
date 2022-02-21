import { Component, OnInit } from '@angular/core';
import { faUser, faKey, faMailBulk, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
 
  faUser = faUser;
  faKey = faKey;
  faMailBulk = faMailBulk;
  faCheck = faCheck;
  signinForm!: FormGroup;
  
  submitted!: boolean;

constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.signinForm = this.fb.group({
      username: ['',Validators.required],
      mail: ['',[Validators.required,Validators.email]],
      createPassword:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',Validators.required],
    },
    {
      validator: MustMatch('createPassword', 'confirmPassword')
    });
    
  }
  

get f() { return this.signinForm.controls; }

signin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signinForm.invalid) {
     return alert('errors!! :-)\n\n' + JSON.stringify(this.signinForm.value, null, 4));
      
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signinForm.value, null, 4));
    console.log('Données du formulaire', this.signinForm.value)
}

onReset() {
    this.submitted = false;
    this.signinForm.reset();
}
}