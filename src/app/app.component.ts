import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {DenunciaPage} from '../pages/denuncia/denuncia';
import {EscudoPage} from '../pages/escudo/escudo';
import {HistorialPage} from '../pages/historial/historial';
import { PoliciaPage } from '../pages/policia/policia';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  //public rootPage:any = HomePage;
 public rootPage : any;
  public pages: Array <{ titulo: string, component:any, icon:string}>
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   
    this.rootPage = HomePage;
    this.pages = [
    {titulo: "Denuncie",           component: DenunciaPage, icon:"megaphone"},
    {titulo: "Historial",          component: HistorialPage, icon:"analitycs"},
    {titulo: "Ver cuadrantes",     component: PoliciaPage, icon:"information-circle"},
    {titulo: "Escudo comunitario", component: EscudoPage, icon:"home"}
  ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  
  }
  goToPage(page){
    this.nav.setRoot(page);
  }
}

