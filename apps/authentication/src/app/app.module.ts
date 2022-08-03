import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './componments/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'})
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ProfileComponent
  ]
})
export class AppModule { }
