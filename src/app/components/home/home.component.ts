import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginStateComponent } from '../login-state/login-state.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, LoginStateComponent],
})
export class HomeComponent {
  // clients: any[] = [];
  // constructor(private firestore: AngularFirestore) {}
  // ngOnInit(): void {
  //   this.firestore
  //     .collection('clients')
  //     .valueChanges()
  //     .subscribe((data) => {
  //       this.clients = data;
  //     });
  // }
}
