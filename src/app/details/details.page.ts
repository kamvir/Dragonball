import { LoadingController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragonballService } from '../service/dragonball.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  details: any;
  imageUrl = 'https://dragon-ball-api.herokuapp.com/';
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private dragonBallService: DragonballService, private loadingCtrl: LoadingController, private toast: ToastController) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await loading.present();
    const name = this.route.snapshot.paramMap.get('name');
    from(this.dragonBallService.getCharacterDetails(name)).subscribe(async data => {
      await loading.dismiss();
      console.log(data);
      this.details = JSON.parse(data.data);
    },
    async error => {
      await loading.dismiss();
      console.log(error);
      const toast = await this.toast.create({
        message: error.error,
        duration: 3000
      });
      await toast.present();
    }
    );
  }

}
