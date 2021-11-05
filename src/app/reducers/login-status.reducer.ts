import { Action } from '@ngrx/store';

export function loginStatusReducer(state = false, action: Action): boolean {
  switch (action.type) {
    case '[Login Page] Login':
      const loginAction = action as LoginAction;
      return (state = true);

    case '[Login Page] Logout':
      const logoutAction = action as LogoutAction;
      return (state = false);

    default:
      return state;
  }
}

export class LoginAction implements Action {
  type = '[Login Page] Login';

  constructor() {}
}

export class LogoutAction implements Action {
  type = '[Login Page] Logout';

  constructor() {}
}
