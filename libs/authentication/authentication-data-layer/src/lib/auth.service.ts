import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthService {
  user$: Observable<any> = user(this.auth);

  constructor(private auth: Auth) {}

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  login(): Promise<UserCredential> {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async isLoggedIn(): Promise<boolean> {
    // only use in code, use observable in template
    return !!(await this.user$.pipe(take(1)).toPromise());
  }
}
