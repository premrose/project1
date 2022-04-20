import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(public router: Router) { }

  username = new FormControl('',[Validators.required]);
  password = new FormControl('',[Validators.required]);


  loginForm = new FormGroup({
    userName : this.username,
    passWord : this.password,
  });

  userErr() {
    if (this.username.hasError('required')) {
      return 'username required';
    }else{
      return null;
    }
  }
  passErr() {
    if (this.password.hasError('required')) {
      return 'password required';
    }else{
      return null;
    }
  }

  submit(){
    localStorage.setItem('access',(this.username.value));
    this.router.navigate(['/media']);
  }

}
