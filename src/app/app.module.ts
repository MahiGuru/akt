import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentModule } from './components/component.module';
import { RouterModule } from '@angular/router';
import { AktHeaderComponent } from './components/akt-header/akt-header.component';

@NgModule({
  declarations: [
    AppComponent, 
    AktHeaderComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    AppRoutingModule,
    AuthenticationModule,
    MatSidenavModule,
    FontAwesomeModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
