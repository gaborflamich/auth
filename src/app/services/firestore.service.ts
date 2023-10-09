import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getAllClients(): Observable<any[]> {
    const itemCollection = collection(this.firestore, 'clients');
    return collectionData(itemCollection, { idField: 'id' });
  }
}
