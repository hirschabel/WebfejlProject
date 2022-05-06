import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  collectionName = 'Posts';


  constructor(private afs: AngularFirestore) { }

  create(post: Post) {
    return this.afs.collection<Post>(this.collectionName).doc(this.afs.createId()).set(post);
  }

  getAll() {
    return this.afs.collection<Post>(this.collectionName).valueChanges();
  }

  update() {
    
  }

  delete() {

  }
}
