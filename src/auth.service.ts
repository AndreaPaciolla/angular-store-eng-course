import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './app/app.store';
import { LoginAction, LogoutAction } from './app/reducers/login-status.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private loginStatus$ = new BehaviorSubject(false);

  constructor(private store: Store<AppState>) {}

  login(): void {
    //this.loginStatus$.next(true);
    this.store.dispatch(new LoginAction());
  }

  logout(): void {
    //this.loginStatus$.next(false);
    this.store.dispatch(new LogoutAction());
  }

  loginStatus(): Observable<boolean> {
    //return this.loginStatus$.asObservable();
    return this.store.select('loginStatus');
  }
}
