import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, RouterModule } from '@angular/router';
import { LoginStateComponent } from '../login-state/login-state.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, LoginStateComponent],
})
export class DashboardComponent {
  constructor(
    private readonly auth: AngularFireAuth,
    private readonly router: Router
  ) {}
}
