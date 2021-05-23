import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Color } from '../color.model';
import { ColorsService } from '../services/color.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  colors$: Observable<Color[]>;

  constructor(
    private colorsService: ColorsService,
    private loadingCtrl: LoadingController
  ) {}


  async ngOnInit(){
    const loading = await this.loadingCtrl.create({ message: "loading..."});
    loading.present();

    this.colors$ = this.colorsService.getOneColor().pipe(
      tap((colors) => {
        loading.dismiss();
        return colors;
      })
    );
  }


}
// constructor(private http: HttpClient) {
  //   http.get("http://localhost:8000/api/users/latest").subscribe(console.log);
  // }