import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'zbl-dash';
  user: CognitoUserInterface | undefined;
  authState: AuthState;
  private unsubscribeAuthUIState: (() => void) | undefined;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.unsubscribeAuthUIState = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.unsubscribeAuthUIState) {
      this.unsubscribeAuthUIState();
    }
  }
}
