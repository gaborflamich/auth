import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginStateComponent } from '../login-state/login-state.component';
import { Observable, map } from 'rxjs';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Client } from 'src/app/interfaces/client';
import { collection, query } from 'firebase/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, LoginStateComponent],
})
export class DashboardComponent {
  // clients$: Observable<Client[]>;
  // constructor(firestore: Firestore) {
  //   const itemCollectionQuery = query(collection(firestore, 'clients'));
  //   this.clients$ = collectionData(itemCollectionQuery, { idField: 'id' }).pipe(
  //     map((data) => data.map((item) => item as Client))
  //   );
  // }
}
