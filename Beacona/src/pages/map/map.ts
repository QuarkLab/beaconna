import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

import { MapStyle } from './map.style';
import { ShopModel } from '../../app/models/shop.model';
import { ItemModel } from '../../app/models/item.model';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapRef: ElementRef;

  map: any;
  location: any;

  shops: ShopModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public geolocation: Geolocation) {
      this.shops = navParams.get('sp');
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    this.location = new google.maps.LatLng(6.856254, 79.90455);
    var l2 = new google.maps.LatLng(7, 79.91455);

    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //  // data can be a set of coordinates, or an error (if an error occurred).
    //  // data.coords.latitude
    //  // data.coords.longitude
    //  if(data.coords){
    //    console.log(data.coords.latitude);
    //    console.log(data.coords.longitude);
    //  }
    // });

    var options = {
      center: this.location,
      zoom: 17,
      streetViewControl: false,
      mapTypeId: 'roadmap',
      styles: MapStyle
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(this.location, this.map);
    this.addMarker(l2, this.map);

    for (var i = 0; i < this.shops.length; i++) { 
      var loc = new google.maps.LatLng(this.shops[i].latitudes + 6.856254, 
        this.shops[i].longitudes + 79.90455);
      this.addMarker(loc, this.map);
    }

    this.geolocation.getCurrentPosition().then((resp) => {
      if (this.isNumeric(resp.coords.latitude) && this.isNumeric(resp.coords.longitude)) {
        this.location = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

        var options = {
          center: this.location,
          zoom: 16,
          streetViewControl: false,
          mapTypeId: 'roadmap'
        }

        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
      }
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position: position,
      map: map,
      title: 'asd'
    });
  }

  isNumeric(n: any): n is number | string {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}
