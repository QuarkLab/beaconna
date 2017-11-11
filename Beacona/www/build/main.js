webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wishlist_wishlist__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.mapRoot = __WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */];
        this.wishlistRoot = __WEBPACK_IMPORTED_MODULE_2__wishlist_wishlist__["a" /* WishlistPage */];
        this.notificationsRoot = __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */];
        this.settingsRoot = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\wamp64\www\beacona\Beacona\src\pages\tabs\tabs.html"*/`<ion-fab top right>\n\n  <button ion-fab><ion-icon name="card"></ion-icon></button>\n\n</ion-fab>\n\n<ion-tabs selectedIndex="1">\n\n   <ion-tab [root]="mapRoot" tabTitle="Map" tabIcon="map"></ion-tab>\n\n   <ion-tab [root]="wishlistRoot" tabTitle="Wishlist" tabIcon="cart"></ion-tab>\n\n   <ion-tab [root]="notificationsRoot" tabTitle="Notifications" tabIcon="alert"></ion-tab>\n\n   <ion-tab [root]="settingsRoot" tabTitle="Settings" tabIcon="settings"></ion-tab>\n\n</ion-tabs>\n\n`/*ion-inline-end:"C:\wamp64\www\beacona\Beacona\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_style__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = (function () {
    function MapPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    MapPage.prototype.showMap = function () {
        var _this = this;
        this.location = new google.maps.LatLng(51.507351, -0.127758);
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
            if (data.coords) {
                console.log(data.coords.latitude);
                console.log(data.coords.longitude);
            }
        });
        var options = {
            center: this.location,
            zoom: 17,
            streetViewControl: false,
            mapTypeId: 'roadmap',
            styles: __WEBPACK_IMPORTED_MODULE_3__map_style__["a" /* MapStyle */]
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(this.location, this.map);
        this.geolocation.getCurrentPosition().then(function (resp) {
            if (_this.isNumeric(resp.coords.latitude) && _this.isNumeric(resp.coords.longitude)) {
                //     this.location = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
                //     var options = {
                //       center: this.location,
                //       zoom: 16,
                //       streetViewControl: false,
                //       mapTypeId: 'roadmap'
                //     }
                //     this.map = new google.maps.Map(this.mapRef.nativeElement, options);
                console.log(resp.coords.latitude);
                console.log(resp.coords.longitude);
            }
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    MapPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    MapPage.prototype.isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MapPage.prototype, "mapRef", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map',template:/*ion-inline-start:"C:\wamp64\www\beacona\Beacona\src\pages\map\map.html"*/`<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Map</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\wamp64\www\beacona\Beacona\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_item_model__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preference_popover_preference_popover__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WishlistPage = (function () {
    function WishlistPage(navCtrl, navParams, popoverCtrl, actionSheetCtrl, animationService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.animationService = animationService;
        this.storage = storage;
        this.itemKeys = [];
        this.animator = animationService.builder();
        this.storage = storage;
        this.storage.get('itemKeys').then(function (val) {
            if (!val) {
                _this.storage.set('itemKeys', []);
            }
            _this.itemKeys = val;
        });
    }
    WishlistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('itemKeys').then(function (val) {
            _this.itemKeys = val;
        });
    };
    WishlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WishlistPage');
    };
    WishlistPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('itemKeys').then(function (val) {
            _this.itemKeys = val;
        });
    };
    WishlistPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('itemKeys').then(function (val) {
            _this.itemKeys = val;
        });
    };
    WishlistPage.prototype.addItem = function (name) {
        // Add item to the front
        this.itemKeys.unshift(new __WEBPACK_IMPORTED_MODULE_4__app_models_item_model__["a" /* ItemModel */](name));
        this.itemNameInput = "";
        this.storage.set('itemKeys', this.itemKeys);
    };
    WishlistPage.prototype.removeItem = function (itemKeyIndex) {
        this.animator.setType('fadeOutRight').show(this.itemCards.toArray()[itemKeyIndex].nativeElement);
        (this.itemKeys).splice(itemKeyIndex, 1);
        this.storage.set('itemKeys', this.itemKeys);
    };
    WishlistPage.prototype.itemClick = function (itemKeyIndex) {
        this.presentActionSheet(itemKeyIndex);
    };
    WishlistPage.prototype.presentActionSheet = function (itemKeyIndex) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: this.itemKeys[itemKeyIndex].name + '\'s options',
            buttons: [
                {
                    text: 'Personalize',
                    role: 'personalize',
                    handler: function () {
                        _this.presentPreferencesPopover(itemKeyIndex);
                    }
                },
                {
                    text: 'Show on map',
                    role: 'showonmap',
                    handler: function () {
                        console.log('Show on map');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    WishlistPage.prototype.presentPreferencesPopover = function (itemKeyIndex) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__preference_popover_preference_popover__["a" /* PreferencePopoverPage */], {
            keyindex: itemKeyIndex,
            keys: this.itemKeys
        });
        popover.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('itemNameInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WishlistPage.prototype, "nameInputRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('itemcard'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], WishlistPage.prototype, "itemCards", void 0);
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wishlist',template:/*ion-inline-start:"C:\wamp64\www\beacona\Beacona\src\pages\wishlist\wishlist.html"*/`<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Wishlist</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-9>\n\n                <ion-item>\n\n                    <ion-input #nameInput id="nameInput" class="item-name-input" type="text" value=""\n\n                    placeholder="Add to wishlist" [(ngModel)]="itemNameInput" clearInput></ion-input>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1>\n\n                <button ion-button icon-only (click)="addItem(itemNameInput)">\n\n                    <ion-icon name="add"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <ion-list>\n\n                      <ion-card #itemcard class="item-card animated fadeInLeft" *ngFor="let item of itemKeys; let i = index;" (press)="itemClick(i)">\n\n                          <ion-row>\n\n                              <ion-col col-9>\n\n                                  <ion-card-header class="item-card-header">{{item.name}}</ion-card-header>\n\n                              </ion-col>\n\n                              <ion-col col-3>\n\n                                  <button class="item-card-remove-button" ion-button icon-only clear medium (click)="removeItem(i)">\n\n                                      <ion-icon name="close-circle"></ion-icon>\n\n                                  </button>\n\n                              </ion-col>\n\n                          </ion-row>\n\n                      </ion-card>\n\n                  </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n          </ion-grid>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\wamp64\www\beacona\Beacona\src\pages\wishlist\wishlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2_css_animator__["AnimationService"], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreferencePopoverPage = (function () {
    function PreferencePopoverPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage = storage;
        this.itemKeyIndex = navParams.get('keyindex');
        this.itemKeys = navParams.get('keys');
    }
    PreferencePopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreferencePopoverPage');
    };
    PreferencePopoverPage.prototype.addTag = function (tagName) {
        // Add item to the front
        this.itemKeys[this.itemKeyIndex].tags.unshift(tagName);
        this.tagNameInput = "";
        this.storage.set('itemKeys', this.itemKeys);
    };
    PreferencePopoverPage.prototype.deleteChip = function (chipIndex) {
        this.itemKeys[this.itemKeyIndex].tags.splice(chipIndex, 1);
        this.storage.set('itemKeys', this.itemKeys);
    };
    PreferencePopoverPage.prototype.setPrice = function (value) {
        this.itemKeys[this.itemKeyIndex].isLowestPrice = value;
        this.storage.set('itemKeys', this.itemKeys);
    };
    PreferencePopoverPage.prototype.setLocation = function (value) {
        this.itemKeys[this.itemKeyIndex].isNearest = value;
        this.storage.set('itemKeys', this.itemKeys);
    };
    PreferencePopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-preference-popover',template:/*ion-inline-start:"C:\wamp64\www\beacona\Beacona\src\pages\preference-popover\preference-popover.html"*/`<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content style="padding: 1em;">\n\n  <ion-title>{{itemKeys[itemKeyIndex].name}} preferences</ion-title>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        Tags\n\n      </ion-col>\n\n      <ion-row>\n\n          <ion-col col-9>\n\n              <ion-item>\n\n                  <ion-input #nameInput id="tagInput" class="tag-name-input" type="text" value=""\n\n                  placeholder="Add tag" [(ngModel)]="tagNameInput" clearInput></ion-input>\n\n              </ion-item>\n\n          </ion-col>\n\n          <ion-col col-1>\n\n              <button ion-button icon-only (click)="addTag(tagNameInput)">\n\n                  <ion-icon name="add"></ion-icon>\n\n              </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      <ion-col col-12>\n\n        <ion-chip *ngFor="let tag of (itemKeys[itemKeyIndex]).tags; let i = index;" \n\n        style="margin-right: 1em;">\n\n          <ion-label>{{tag}}</ion-label>\n\n          <button ion-button clear color="light" (click)="deleteChip(i)">\n\n            <ion-icon name="close-circle"></ion-icon>\n\n          </button>\n\n        </ion-chip>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row radio-group>\n\n      <ion-col col-12>\n\n        Price\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-label>Low</ion-label>\n\n          <ion-radio value="l" checked="{{(itemKeys[itemKeyIndex]).isLowestPrice == true}}"\n\n          (click)="setPrice(true)"></ion-radio>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-label>High</ion-label>\n\n          <ion-radio value="h" checked="{{(itemKeys[itemKeyIndex]).isLowestPrice == false}}"\n\n          (click)="setPrice(false)"></ion-radio>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row radio-group>\n\n        <ion-col col-12>\n\n            Location\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <ion-item>\n\n              <ion-label>Near</ion-label>\n\n              <ion-radio value="n" checked="{{(itemKeys[itemKeyIndex]).isNearest == true}}"\n\n              (click)="setLocation(true)"></ion-radio>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <ion-item>\n\n              <ion-label>Far</ion-label>\n\n              <ion-radio value="f" checked="{{(itemKeys[itemKeyIndex]).isNearest == false}}"\n\n              (click)="setLocation(false)"></ion-radio>\n\n            </ion-item>\n\n          </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>`/*ion-inline-end:"C:\wamp64\www\beacona\Beacona\src\pages\preference-popover\preference-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PreferencePopoverPage);
    return PreferencePopoverPage;
}());

//# sourceMappingURL=preference-popover.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.num = 10;
        this.notifications = [
            { id: 1, name: 'Pizza Hut Offers', description: 'Pizza Hut Offers! Discounts from 20% for the Credit/Debit card holders',
                type: '1', price: 'Rs. 100.00', shopName: 'PizzaHut', distance: '5km',
                thumbnail: 'assets/imgs/kabajees.png', },
            { id: 1, name: 'Carrot', description: 'Fresh Vegetables',
                type: '2', price: 'Rs. 150.00 (20% OFF)', shopName: 'Cargills Food City', distance: '5km',
                thumbnail: 'assets/imgs/carrot.png', },
            { id: 1, name: 'Item 3', description: 'Description of item 1',
                type: '3', price: 'Rs. 100.00', shopName: 'PizzaHut', distance: '5km',
                thumbnail: 'assets/imgs/clothe.png', },
            { id: 1, name: 'Woman Handbag', description: 'Odel',
                type: '2', price: 'Rs. 900.00 (Limited)', shopName: 'Odel, Nugegoda', distance: '5km',
                thumbnail: 'assets/imgs/handbag.jpg', },
        ];
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
        // this.notifications = [new Notification('First'), new Notification('Second'), new Notification('Third')];
        // var a:Notification = new Notification('xx');
        // this.num = a.name;
    };
    NotificationsPage.prototype.loadNotifications = function () {
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\wamp64\www\beacona\Beacona\src\pages\notifications\notifications.html"*/`<!--\n\n  Generated template for the NotificationsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Notifications</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="" *ngFor="let item of notifications">\n\n        \n\n      <!-- General Ad -->\n\n      <ion-card *ngIf="item.type == \'1\'">\n\n        <ion-thumbnail item-start>\n\n            <img src="{{ item.thumbnail }}">\n\n          </ion-thumbnail>\n\n        <ion-card-content> {{ item.description }} </ion-card-content>\n\n      </ion-card>\n\n\n\n      <!-- General Notification -->\n\n      <ion-card *ngIf="item.type == \'2\'">\n\n          <ion-item>\n\n            <ion-thumbnail item-start>\n\n              <img src="{{ item.thumbnail }}">\n\n            </ion-thumbnail>\n\n            <h2>{{ item.name }}</h2>\n\n            <h3>{{ item.shopName}}</h3>\n\n    \n\n            <h5>\n\n                <span item-left> {{ item.price }}</span>\n\n                <span item-left>  </span>\n\n                <b><span item-right></span></b>    \n\n            </h5>\n\n          </ion-item>\n\n        </ion-card>\n\n\n\n        <!-- No image Ad -->\n\n        <!-- <ion-card *ngIf="item.type == \'3\'">\n\n            <ion-card-header>\n\n              Header\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n\n            </ion-card-content>\n\n          </ion-card> -->\n\n\n\n\n\n\n\n        <!-- CARD -->\n\n        <ion-card  *ngIf="item.type == \'3\'">\n\n            \n\n              <img src="{{ item.thumbnail }}">            \n\n              <ion-item>\n\n                  <!-- <ion-icon name="mail" item-left large ></ion-icon> -->\n\n                  <h2>Cool Planet</h2>\n\n                  <p>61, Isipathana Mawatha, Colombo</p>\n\n                </ion-item>\n\n\n\n              <ion-item>\n\n                <!-- <ion-icon name="football" item-start large></ion-icon> -->\n\n                <h2>Opal</h2>\n\n                <p>De S. Jayasinghe Mawatha, Nugegoda</p>\n\n              </ion-item>\n\n            \n\n              <ion-item>\n\n                <!-- <span item-left>Limited Offer</span> -->\n\n                <!-- <span item-left>(2.6 mi)</span> -->\n\n                <button ion-button icon-left clear item-end>\n\n                  <ion-icon name="map"></ion-icon>\n\n                  Show in map\n\n                </button>\n\n              </ion-item>\n\n            \n\n            </ion-card>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\wamp64\www\beacona\Beacona\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-deals',template:/*ion-inline-start:"C:\wamp64\www\beacona\Beacona\src\pages\settings\settings.html"*/`<!--\n\n  Generated template for the DealsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row style="margin-top:1em">\n\n      <ion-item>\n\n          <ion-label> Track  My Location </ion-label>\n\n          <ion-toggle checked="true"></ion-toggle>\n\n      </ion-item>\n\n  </ion-row>\n\n\n\n  <ion-item>\n\n      Remove Ads\n\n      <ion-badge item-end>PRO</ion-badge>\n\n  </ion-item>\n\n\n\n  <ion-card>\n\n      <img src="assets/imgs/user.png" style="height: 15em;\n\n      width: auto;\n\n      margin: auto;\n\n      display: block;"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          Team Void\n\n          </ion-card-title>\n\n        <p style="white-space: pre;">\n\n          <b>\n\n          Question? FeedBack?\n\n          Contact Us right away.... \n\n          Phone : 071 123 4567 \n\n          Email : TeamVoid@gmail.com \n\n          Facebook : www.facebook.com/team_void </b>\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\wamp64\www\beacona\Beacona\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_map_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_wishlist_wishlist__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_preference_popover_preference_popover__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_css_animator__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_maps__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_preference_popover_preference_popover__["a" /* PreferencePopoverPage */],
                __WEBPACK_IMPORTED_MODULE_12_css_animator__["AnimatesDirective"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_preference_popover_preference_popover__["a" /* PreferencePopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12_css_animator__["AnimationService"],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\wamp64\www\beacona\Beacona\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"C:\wamp64\www\beacona\Beacona\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapStyle; });
var MapStyle = [
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e0e0e0"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4fc3f7"
            }
        ]
    }
];
//# sourceMappingURL=map.style.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemModel; });
var ItemModel = (function () {
    function ItemModel(name) {
        this.tags = ["cat", "boat"];
        this.isLowestPrice = true;
        this.isNearest = true;
        this.name = name;
    }
    return ItemModel;
}());

//# sourceMappingURL=item.model.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map