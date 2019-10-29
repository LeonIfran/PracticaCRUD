import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup} from '@angular/forms';
import {LoadingController, AlertController} from '@ionic/angular'
import {FirestoreService} from '../../services/data/firestore.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  public createSongForm: FormGroup;
  constructor(public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, 
    public firestoreService: FirestoreService, 
    formBuilder: FormBuilder ) { 
      this.createSongForm =  formBuilder.group({
        albumName: ['', Validators.required],
        artistName: ['', Validators.required],
        songDescription: ['', Validators.required],
        songName: ['', Validators.required],
      });
    }

  ngOnInit() {
  }

}
