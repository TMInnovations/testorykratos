import { Component } from '@angular/core';
import { PublicApi } from '@oryd/kratos-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private pa: PublicApi) {}

  callRegistrationFlow() {
    this.pa.initializeSelfServiceRegistrationViaBrowserFlow();
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
