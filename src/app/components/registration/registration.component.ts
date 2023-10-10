import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = '';

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly router: Router
  ) {}

  erroreMessageMap: any = {
    'auth/email-already-in-use': 'An account with that email already exists',
    'auth/invalid-email': 'Please enter a valid email address',
    'auth/internal-error':
      'Something went wrong. Please check your inputs and try again.',
  };

  regForm = new FormGroup({
    formEmail: new FormControl(),
    formPassword: new FormControl(),
    formConfirmPassword: new FormControl(),
  });

  createAccount(): void {
    const email = this.regForm.get('formEmail')?.value;
    const password = this.regForm.get('formPassword')?.value;
    const confirmPassword = this.regForm.get('formConfirmPassword')?.value;
    if (password !== confirmPassword) {
      this.error = 'The passwords do not match!';
    }

    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['/']))
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
