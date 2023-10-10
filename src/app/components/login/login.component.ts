import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoginStateComponent } from '../login-state/login-state.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoginStateComponent],
})
export class LoginComponent {
  public errorMessage: string | null = null;
  error: string = '';

  erroreMessageMap: any = {
    'auth/wrong-password': 'The password is not correct',
    'auth/invalid-login-credentials': 'The password is not correct',
    'auth/invalid-email': 'Please enter a valid email address',
    'auth/user-not-found': 'There is no account with that email',
    'auth/internal-error':
      'Something went wrong. Please check your inputs and try again.',
  };

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly router: Router
  ) {}

  loginForm = new FormGroup({
    formEmail: new FormControl('', Validators.required),
    formPassword: new FormControl('', Validators.required),
  });

  onLogin(): void {
    if (this.loginForm) {
      localStorage.setItem('token', Math.random().toString());
      const email = this.loginForm.get('formEmail')?.value;
      const password = this.loginForm.get('formPassword')?.value;
      this.auth
        .signInWithEmailAndPassword(email as string, password as string)
        .then(() => this.router.navigate(['/dashboard']))
        .catch((error) => {
          for (let errorType of Object.keys(this.erroreMessageMap)) {
            if (error.message.includes(errorType)) {
              this.error = this.erroreMessageMap[errorType];
              break;
            }
          }
        });
    }
  }
}
