import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginStateComponent } from '../login-state/login-state.component';
import { LoginButtonsComponent } from '../login-buttons/login-buttons.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AppRoutingModule,
    LoginStateComponent,
    LoginButtonsComponent,
  ],
})
export class HeaderComponent {}
