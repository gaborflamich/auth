import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthStateService } from 'src/app/services/auth-state.service';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class LoginButtonsComponent {
  isLoggedIn: boolean | null = null;

  constructor(
    private authStateService: AuthStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authStateService.monitorAuthState().subscribe((state) => {
      this.isLoggedIn = state;
    });
  }

  onLogout(): void {
    const confirmation = confirm('Do you want to log out?');
    if (confirmation) {
      this.authStateService
        .logout()
        .then(() => {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
          console.log('You are logged out');
        })
        .catch((error) => {
          console.error('Error during logout:', error);
        });
    }
  }
}
