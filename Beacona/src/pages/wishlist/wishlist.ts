import { Component, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { AnimationService, AnimationBuilder } from 'css-animator';
import { Storage } from '@ionic/storage';

import { ItemModel } from './../../app/models/item.model';
import { PreferencePopoverPage } from './../preference-popover/preference-popover';
import { MapPage } from './../map/map';
import { ShopModel } from '../../app/models/shop.model';

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  private animator: AnimationBuilder;
  public itemKeys: ItemModel[] = [];

  public itemNameInput: any;

  @ViewChild('itemNameInput') nameInputRef: ElementRef;
  @ViewChildren('itemcard') itemCards: QueryList<ElementRef>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController,
    public actionSheetCtrl: ActionSheetController, public animationService: AnimationService, public storage: Storage) {
    this.animator = animationService.builder();
    this.storage = storage;
    this.storage.get('itemKeys').then((val) => {
      if (!val) {
        this.storage.set('itemKeys', []);
      }
      this.itemKeys = val;
    });
  }

  ngOnInit(): void {
    this.storage.get('itemKeys').then((val) => {
      this.itemKeys = val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }

  ionViewWillEnter() {
    this.storage.get('itemKeys').then((val) => {
      this.itemKeys = val;
    });
  }

  ionViewDidEnter() {
    this.storage.get('itemKeys').then((val) => {
      this.itemKeys = val;
    });
  }

  addItem(name: string) {
    // Add item to the front
    this.itemKeys.unshift(new ItemModel(name));
    this.itemNameInput = "";
    this.storage.set('itemKeys', this.itemKeys);
  }

  removeItem(itemKeyIndex: number) {
    this.animator.setType('fadeOutRight').show(this.itemCards.toArray()[itemKeyIndex].nativeElement);
    (this.itemKeys).splice(itemKeyIndex, 1);
    this.storage.set('itemKeys', this.itemKeys);
  }

  itemClick(itemKeyIndex: number) {
    this.presentActionSheet(itemKeyIndex);
  }

  presentActionSheet(itemKeyIndex: number) {
    const actionSheet = this.actionSheetCtrl.create({
      title: this.itemKeys[itemKeyIndex].name + '\'s options',
      buttons: [
        {
          text: 'Personalize',
          role: 'personalize',
          handler: () => {
            this.presentPreferencesPopover(itemKeyIndex);
          }
        },
        {
          text: 'Show on map',
          role: 'showonmap',
          handler: () => {
            this.presentMapPage();
          }
        }
      ]
    });

    actionSheet.present();
  }

  presentPreferencesPopover(itemKeyIndex: number) {
    let popover = this.popoverCtrl.create(PreferencePopoverPage, {
      keyindex: itemKeyIndex,
      keys: this.itemKeys});
    popover.present();
  }

  presentMapPage(){
    let shops: ShopModel[] = [];
    shops.push(new ShopModel('Pizzahut', 0.05, 1, 'img/pizzahut.png'));
    shops.push(new ShopModel('Food City', 0.1, 0.05, 'img/foodcity.png'));
    shops.push(new ShopModel('Keels Super', 0.02, 1.2, 'img/keels.png'));


    this.navCtrl.push(MapPage, {
      sp: shops
  });
  }
}
