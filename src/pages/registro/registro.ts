import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  Name:string;
  Documento:string;
  correo:string;
  UserName:string;
  password:string;
  Repassword:string;
  Numero:string;
  Direccion:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  registro(){
    if(this.Name.length==0 || this.Documento.length==0
    || this.correo.length==0 || this.UserName.length==0
  || this.password.length==0 || this.Repassword.length==0
 ||this.Numero.length==0 || this.Direccion.length==0
) alert("termina de llenar");
  }
}
