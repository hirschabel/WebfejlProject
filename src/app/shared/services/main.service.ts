import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }
  
  loadItem(): Observable<Array<Item>> {
    return this.afs.collection<Item>('Items').valueChanges();
  }

  loadImage(imgUrl: string) {
    return this.storage.ref(imgUrl).getDownloadURL();
  }

}
