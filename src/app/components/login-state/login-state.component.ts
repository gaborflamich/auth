import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthStateService } from 'src/app/services/auth-state.service';

@Component({
  selector: 'app-login-state',
  templateUrl: './login-state.component.html',
  styleUrls: ['./login-state.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LoginStateComponent implements OnInit {
  isLoggedIn: boolean | null = null;

  constructor(private authStateService: AuthStateService) {}

  ngOnInit(): void {
    this.authStateService.monitorAuthState().subscribe((state) => {
      this.isLoggedIn = state;
    });
  }
}
