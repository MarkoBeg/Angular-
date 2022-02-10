import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

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
  dataStorage: {} = JSON.parse(localStorage.getItem('guest || admin') || '{}');

  loginForm = new FormGroup({
    user: new FormControl(this.user, Validators.required),
    password: new FormControl(this.password, Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  handleLogin() {
    console.log(this.loginForm.value);
    try {
      if (this.loginForm.valid) {
        alert('Login in successful');
        console.log(this.loginForm.value);
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/home']);
      }
    } catch (err) {
      console.log(err);
    }
    try {
      if (this.user === 'admin') {
        console.log('Admin is ON');
      } else {
        console.log('Guest is ON');
        this.router.navigate(['/user']);
      }
    } catch (err) {
      console.log(err);
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
