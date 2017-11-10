import { ItemModel } from './../../app/models/item.model';
import { Component, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { AnimationService, AnimationBuilder } from 'css-animator';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  private animator: AnimationBuilder;
  public itemKeys: ItemModel[] = [];

  @ViewChild('itemNameInput') nameInputRef: ElementRef;
  @ViewChildren('itemcard') itemCards: QueryList<ElementRef>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController, public animationService: AnimationService, public storage: Storage) {
      this.animator = animationService.builder();
      this.storage = storage;
      this.storage.get('itemKeys').then((val) => {
        if(!val){
          this.storage.set('itemKeys', []);
        }
        this.itemKeys = val;
      });
  }

  ngOnInit():void{
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

  addItem(name: string){
    // Add item to the front
    this.itemKeys.unshift(new ItemModel(name));
    this.itemNameInput = "";
    this.storage.set('itemKeys',this.itemKeys);
  }

  removeItem(itemKeyNo: number){
    this.animator.setType('fadeOutRight').show(this.itemCards.toArray()[itemKeyNo].nativeElement);
    (this.itemKeys).splice(itemKeyNo, 1);
    this.storage.set('itemKeys',this.itemKeys);
  }

  itemClick(itemKeyNo: number){
    this.presentActionSheet(itemKeyNo);
  }

  presentActionSheet(itemKeyNo: number) {
    const actionSheet = this.actionSheetCtrl.create({
      title: this.itemKeys[itemKeyNo].name + ' options',
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
