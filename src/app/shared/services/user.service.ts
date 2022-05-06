import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';

import { getAuth, deleteUser } from '@angular/fire/auth'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(private afs: AngularFirestore, private authService: AuthService) { }



  create(user: User) {
      return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  getById(id: string) {
    return this.afs.collection<User>(this.collectionName).doc(id).valueChanges();
  }

  update(user: User) {
    this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  delete(id: string) {
    const usr = getAuth().currentUser;
    console.log(usr);
    if (usr) {
      deleteUser(usr).then()
      this.afs.collection<User>(this.  collectionName).doc(id).delete();
    }
  }
}
