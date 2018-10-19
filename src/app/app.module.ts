import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ClientPage } from '../pages/client/client';
import { ComplaintPage } from '../pages/complaint/complaint';
import { HistoryCriminalPage } from '../pages/history-criminal/history-criminal';
import { QuadrantPage } from '../pages/quadrant/quadrant';
import { AlertNotificationPage } from '../pages/alert-notification/alert-notification';
import { UserServiProvider } from '../providers/user-servi/user-servi';
import { LocationsPage } from '../pages/locations/locations';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ClientPage,
    ComplaintPage,
    HistoryCriminalPage,
    QuadrantPage,
    AlertNotificationPage,
    LocationsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ClientPage,
    ComplaintPage,
    HistoryCriminalPage,
    QuadrantPage,
    AlertNotificationPage,
    LocationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiProvider
  ]
})
export class AppModule {}
