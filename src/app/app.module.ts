import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginStateComponent } from './components/login-state/login-state.component';
import { LoginButtonsComponent } from './components/login-buttons/login-buttons.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { RegistrationComponent } from './components/registration/registration.component';
// import { provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HeaderComponent,
    HomeComponent,
    LoginStateComponent,
    DashboardComponent,
    LoginButtonsComponent,
    BrowserModule,
    LoginComponent,
    RegistrationComponent,
    AppRoutingModule,
    NgbModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
