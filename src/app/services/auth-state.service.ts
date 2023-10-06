import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  constructor(private auth: AngularFireAuth) {}

  monitorAuthState(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.auth.authState.subscribe((user) => {
        if (user) {
          observer.next(true);
        } else {
          observer.next(false);
        }
      });
    });
  }

  logout(): Promise<void> {
    return this.auth.signOut();
  }
}
