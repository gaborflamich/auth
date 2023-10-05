import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  constructor(private readonly auth: AngularFireAuth) {}

  form = new FormGroup({
    formEmail: new FormControl(),
    formPassword: new FormControl(),
  });

  onSubmit(): void {
    if (this.form) {
      const email = this.form.get('formEmail')?.value;
      const password = this.form.get('formPassword')?.value;
      console.log(email, password);
      this.auth
        .signInWithEmailAndPassword(email as string, password as string)
        .then(() => console.log('You are logged in'));
    }
  }
}
