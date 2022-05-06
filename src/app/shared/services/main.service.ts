import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  collectionName1 = 'Items';
  collectionName2 = 'Categories';

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }
  
  loadItem(): Observable<Array<Item>> {
     return this.afs.collection<Item>(this.collectionName1, ref => ref.orderBy('name', 'asc')).valueChanges();
  }

  loadCategory(): Observable<Array<Category>> {
    return this.afs.collection<Category>(this.collectionName2, ref => ref.orderBy('prio', 'asc')).valueChanges();
  }

  loadImage(imgUrl: string) {
    return this.storage.ref(imgUrl).getDownloadURL();
  }

}
