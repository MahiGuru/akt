import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthModule } from '@auth0/auth0-angular';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: AuthenticationComponent}
]

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthModule.forRoot({
      domain: 'akt-resources.eu.auth0.com',
      clientId: 'AzqnGg6Tt5KCtXbbZZE2puDUeS7H7dk4',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
})
export class AuthenticationModule { }
