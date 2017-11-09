import { ItemModel } from './../../app/models/item.model';
import { Component, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

import { AnimationService, AnimationBuilder } from 'css-animator';

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  private animator: AnimationBuilder;
  public items: ItemModel[] = [];

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChildren('itemcard') itemCards: QueryList<ElementRef>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController, public animationService: AnimationService) {
      this.animator = animationService.builder();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }

  addItem(name: string){
    this.items.push(new ItemModel(name));

    //>> Somehow clear the input field
  }

  removeItem(itemNo: number){
    this.animator.setType('fadeOutRight').show(this.itemCards.toArray()[itemNo].nativeElement);
    (this.items).splice(itemNo, 1);
  }

  itemClick(itemNo: number){
    this.presentActionSheet();
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'XXXX options',
      buttons: [
        {
          text: 'Personalize',
          role: 'personalize',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Show on map',
          role: 'showonmap',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
