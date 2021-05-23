import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Color } from '../color.model';
import { ColorsService } from '../services/color.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  colors$: Observable<Color[]>;

  constructor(
    private colorsService: ColorsService,
    private loadingCtrl: LoadingController
  ) {}


  async ngOnInit(){
    const loading = await this.loadingCtrl.create({ message: "loading..."});
    loading.present();

    this.colors$ = this.colorsService.getColors().pipe(
      tap((colors) => {
        loading.dismiss();
        return colors;
      })
    );
  }

}
