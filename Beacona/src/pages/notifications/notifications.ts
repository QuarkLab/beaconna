import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  num = 10;
  items = [];
  public notifications: Notification[] = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
    // this.notifications = [new Notification('First'), new Notification('Second'), new Notification('Third')];
    // var a:Notification = new Notification('xx');
    // this.num = a.name;

    this.notifications = [
      {id: 1, name:'Pizza Hut Offers', description:'Pizza Hut Offers! Discounts from 20% for the Credit/Debit card holders',
       type:'1', price:'Rs. 100.00', shopName: 'PizzaHut', distance: '5km',
       thumbnail:'assets/imgs/kabajees.png', },

       {id: 1, name:'Carrot', description:'Fresh Vegetables',
       type:'2', price:'Rs. 150.00 (20% OFF)', shopName: 'Cargills Food City', distance: '5km',
       thumbnail:'assets/imgs/carrot.png', },
       
       {id: 1, name:'Item 3', description:'Description of item 1',
       type:'3', price:'Rs. 100.00', shopName: 'PizzaHut', distance: '5km',
       thumbnail:'assets/imgs/clothe.png', },

       {id: 1, name:'Woman Handbag', description:'Odel',
       type:'2', price:'Rs. 900.00 (Limited)', shopName: 'Odel, Nugegoda', distance: '5km',
       thumbnail:'assets/imgs/handbag.jpg', },
      ];
  }

  loadNotifications(){

  }

}
