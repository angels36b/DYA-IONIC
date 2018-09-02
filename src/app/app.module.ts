import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//import {MenuPageModule} from '../pages/menu/menu.module';
import { MenuPage } from '../pages/menu/menu';
import { DenunciaPage} from '../pages/denuncia/denuncia';
import { EscudoPage } from '../pages/escudo/escudo';
import { HistorialPage } from '../pages/historial/historial';
import { PoliciaPage } from '../pages/policia/policia';
import { RegistroPage } from '../pages/registro/registro'
import { NotificacionesPage } from '../pages/notificaciones/notificaciones'

@NgModule({
  declarations: [
    MyApp,
    HomePage,  
    MenuPage,
    DenunciaPage,
    EscudoPage,
    HistorialPage,
    PoliciaPage,
    NotificacionesPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //MenuPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    DenunciaPage,
    EscudoPage,
    HistorialPage,
    PoliciaPage,
    NotificacionesPage,
    RegistroPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
