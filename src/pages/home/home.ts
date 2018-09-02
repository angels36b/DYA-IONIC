import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  password:string;

  constructor(public navCtrl: NavController) 
  {

  }

  login(){
    console.log("NameCiudadano:"+ this.username);
    console.log("Password: "+ this.password);
  }

  goRegistro(){
    this.navCtrl.push(RegistroPage);
  }
  
 goMenu(){  //void=no devuelve nada
   this.navCtrl.push(MenuPage);

  }

}
