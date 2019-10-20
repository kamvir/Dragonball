import { Component, OnInit } from '@angular/core';
import { DragonballService } from '../service/dragonball.service';
import { from } from 'rxjs';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  characters = [];
  imageUrl = 'https://dragon-ball-api.herokuapp.com/';
  constructor(private dragonballService: DragonballService, private loadingCtrl: LoadingController, private toast: ToastController) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await loading.present();
    from(this.dragonballService.getCharacters()).subscribe(async data => {
      await loading.dismiss();
      this.characters = JSON.parse(data.data);
      console.log(JSON.parse(data.data));
    },
    async error => {
      await loading.dismiss();
      const toast = await this.toast.create({
        message: error.error,
        duration: 3000
      });
      await toast.present();
      console.log(error);
    }
    );
  }
}
