import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {

  private user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  authUser() {
    return this.user;
  }

}
