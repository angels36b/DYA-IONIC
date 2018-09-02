import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DenunciaPage} from '../denuncia/denuncia';
import { EscudoPage } from '../escudo/escudo';
import { HistorialPage } from '../historial/historial'
import { PoliciaPage } from '../policia/policia';
import { RegistroPage } from '../registro/registro';
import { NotificacionesPage } from '../notificaciones/notificaciones'

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  goDenuncia(){
    this.navCtrl.push(DenunciaPage);  
  }

  goEscudo(){
    this.navCtrl.push(EscudoPage);
  }

  goHistorial(){
    this.navCtrl.push(HistorialPage);
  }

  goPolicia() {
    this.navCtrl.push(PoliciaPage);
  }

  goRegistro(){
    this.navCtrl.push(RegistroPage);
  }

  goNotificaciones(){
    this.navCtrl.push(NotificacionesPage);
  }
  
}
