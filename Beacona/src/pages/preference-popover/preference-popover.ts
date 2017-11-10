import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ItemModel } from './../../app/models/item.model';

@Component({
  selector: 'page-preference-popover',
  templateUrl: 'preference-popover.html',
})
export class PreferencePopoverPage {

  public itemKeys: ItemModel[];
  public itemKeyIndex: number;

  public tagNameInput: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage = storage;
    this.itemKeyIndex = navParams.get('keyindex')
    this.itemKeys = navParams.get('keys');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencePopoverPage');
  }

  addTag(tagName: string) {
    // Add item to the front
    this.itemKeys[this.itemKeyIndex].tags.unshift(tagName);
    this.tagNameInput = "";
    this.storage.set('itemKeys', this.itemKeys);
  }

  deleteChip(chipIndex: number) {
    this.itemKeys[this.itemKeyIndex].tags.splice(chipIndex, 1);
    this.storage.set('itemKeys', this.itemKeys);
  }

  setPrice(value: boolean){
    this.itemKeys[this.itemKeyIndex].isLowestPrice = value;
    this.storage.set('itemKeys', this.itemKeys);
  }

  setLocation(value: boolean){
    this.itemKeys[this.itemKeyIndex].isNearest = value;
    this.storage.set('itemKeys', this.itemKeys);
  }
}
