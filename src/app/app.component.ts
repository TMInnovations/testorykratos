import { Component } from '@angular/core';
import { PublicApi } from '@oryd/kratos-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private pa: PublicApi) {}

  private headers: RequestInit = {
    method: 'GET',
    headers: { credentials: 'include' },
    redirect: 'follow',
    credentials: 'include',
  };

  callRegistrationFlowViaSDK() {
    this.pa
      .initializeSelfServiceRegistrationViaBrowserFlow(this.headers)
      .then(r => console.log(r))
      .catch(f => console.log(f));
  }

  callRegistrationFlowViaFetch() {
    fetch(
      'http://localhost:4433/self-service/registration/browser',
      this.headers
    )
      .then(r => console.log(r))
      .catch(f => console.log(f));
  }

  testApiAvail() {
    // https://www.ory.sh/kratos/docs/reference/api#check-alive-status

    const headers = {
      Accept: 'application/json',
    };

    fetch('/health/alive', {
      method: 'GET',
      headers,
      credentials: 'include',
    }).then(r => console.log(r));
  }
}
