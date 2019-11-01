import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/songs.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../../services/data/firestore.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public song: Observable<Song>;
  public songId: string;

  constructor(private firestoreService: FirestoreService,
    private route: ActivatedRoute, private alertController: AlertController, private router: Router) { }

    async deleteSong() {
      const alert = await this.alertController.create({
        message: 'Are you sure you want to delete the song?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: blah => {
              console.log('Confirm Cancel: blah');
            },
          },
          {
            text: 'Okay',
            handler: () => {
              this.firestoreService.deleteSong(this.songId).then(() => {
                this.router.navigateByUrl('');
              });
            },
          },
        ],
      });
    
      await alert.present();
    }
  
  ngOnInit() {
    //const songId: string = this.route.snapshot.paramMap.get('id');
    this.songId = this.route.snapshot.paramMap.get('id');
    this.song = this.firestoreService.getSongDetail(this.songId).valueChanges();
  }

}
