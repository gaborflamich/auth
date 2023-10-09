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
    'auth/wrong-password': 'The password is not correct',
    'auth/invalid-email': 'Please enter a valid email address',
    'auth/user-not-found': 'There is no account with that email',
    'auth/internal-error':
      'Something went wrong. Please check your inputs and try again.',
  };

  regForm = new FormGroup({
    formEmail: new FormControl(),
    formPassword: new FormControl(),
  });

  createAccount(): void {
    const email = this.regForm.get('formEmail')?.value;
    const password = this.regForm.get('formPassword')?.value;
    console.log(email, password);
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['/']))
      .catch((error) => {
        this.error = error.message;
      });
  }
}
