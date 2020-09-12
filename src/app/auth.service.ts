import { Injectable } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor() { 
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
    })
  }

  isAuthenticated() {
    if (this.authState === 'signedin' && this.user) {
      return true
    }
    return false
  }
}
