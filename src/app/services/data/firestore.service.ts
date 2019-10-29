import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import { Song } from '../../models/song';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }
  createSong(
    albumName: string,
    artistName: string,
    songDescription: string,
    songName: string
  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc(`songList/${id}`).set({
      id,
      albumName,
      artistName,
      songDescription,
      songName
    });
  }
}
