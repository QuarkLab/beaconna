import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MapPage } from '../pages/map/map';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { PreferencePopoverPage } from '../pages/preference-popover/preference-popover';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AnimationService, AnimatesDirective } from 'css-animator';
import { IonicStorageModule } from '@ionic/storage';

import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,

    MapPage,
    WishlistPage,
    NotificationsPage,
    SettingsPage,
    TabsPage,

    PreferencePopoverPage,

    AnimatesDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    MapPage,
    WishlistPage,
    NotificationsPage,
    SettingsPage,
    TabsPage,

    PreferencePopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    AnimationService,

    GoogleMaps,
    Geolocation
  ]
})
export class AppModule {}
