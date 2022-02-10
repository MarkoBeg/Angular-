import { Injectable } from '@angular/core';
import { UserModel } from '../user.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'authUser';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user!: UserModel | null;

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor() {}

  login(username: string, password: string) {
   return {
     
   }
  }
}
