import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegistroPage} from '../pages/registro/registro';
//import {MenuPageModule} from '../pages/menu/menu.module';
import { MenuPage } from '../pages/menu/menu';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    MenuPage
    
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
    RegistroPage,
    MenuPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
