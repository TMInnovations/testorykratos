import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PublicApi } from '@oryd/kratos-client';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: PublicApi,
      useFactory: getPublicApi,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function getPublicApi(): PublicApi {
  return new PublicApi({ basePath: environment.basePath });
}
