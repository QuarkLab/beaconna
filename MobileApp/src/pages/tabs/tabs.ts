import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  mapRoot = 'MapPage'
  wishlistRoot = 'WishlistPage'
  notificationsRoot = 'NotificationsPage'
  settingsRoot = 'SettingsPage'

  constructor(public navCtrl: NavController) {}
}
