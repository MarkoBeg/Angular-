import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formTitle: string = 'Reactive Form';
  usernamePattern = '^[A-Za-z0-9]{3,12}$';
  passwordPattern =
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{4,}';

  //dohvacamo usere unutar FormGroup
  user: any = '';
  password: any = '';

  //localStorage dobivamo javascript objekt
  data: {} = JSON.parse(localStorage.getItem('user') || '{}');

  loginForm = new FormGroup({
    user: new FormControl(this.user, Validators.required),
    password: new FormControl(this.password, Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    console.log(this.loginForm.value);
    try {
      localStorage.setItem('user', JSON.stringify(this.user));
      if (this.user === 'admin') {
        console.log('Admin is ON');
      } else {
        console.log('Guest is ON');
      }
    } catch (err) {
      console.error('Something went wrong', err);
    }
  }

  //validators koje koristimo unutar html za error handling
  get User() {
    return this.loginForm.get('user');
  }
  get Password() {
    return this.loginForm.get('password');
  }
}
