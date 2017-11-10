import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { WishlistPage } from '../wishlist/wishlist';
import { NotificationsPage } from '../notifications/notifications';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  mapRoot = MapPage;
  wishlistRoot = WishlistPage;
  notificationsRoot = NotificationsPage;
  settingsRoot = SettingsPage;

  constructor() {

  }
}
