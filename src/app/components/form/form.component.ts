import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
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

  @Input() loginForm!: FormGroup;

  dataStorage: {} = JSON.parse(localStorage.getItem('guest || admin') || '{}');

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // ili moze ici tipa
      // email: ["", {
      //   validators : [Validators.required, Validators.email, ...],
      //   ...
      // }]
      user: new FormControl(this.user, Validators.required),
      password: new FormControl(this.password, Validators.required),
    });
  }

  handleLogin() {
    console.log(this.loginForm.value);
    try {
      if (this.loginForm.valid) {
        alert('Login in successful');
        console.log(this.loginForm.value);
        localStorage.setItem('guest || admin', JSON.stringify(this.user));
      }
    } catch (err) {
      console.log(err);
    }
    try {
      if (this.user === 'admin') {
        console.log('Admin is ON');
        alert('Logged in as Admin');
        this.router.navigate(['/admin']);
      } else {
        console.log('Guest is ON');
        alert('Logged in as Guest');
        this.router.navigate(['/admin']);
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
