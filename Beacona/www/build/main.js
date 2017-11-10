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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/sumedhe/Project/beacona/Beacona/src/pages/tabs/tabs.html"*/`<ion-fab top right>\n  <button ion-fab><ion-icon name="card"></ion-icon></button>\n</ion-fab>\n<ion-tabs selectedIndex="1">\n   <ion-tab [root]="mapRoot" tabTitle="Map" tabIcon="map"></ion-tab>\n   <ion-tab [root]="wishlistRoot" tabTitle="Wishlist" tabIcon="cart"></ion-tab>\n   <ion-tab [root]="notificationsRoot" tabTitle="Notifications" tabIcon="alert"></ion-tab>\n   <ion-tab [root]="settingsRoot" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/home/sumedhe/Project/beacona/Beacona/src/pages/tabs/tabs.html"*/
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
            selector: 'page-map',template:/*ion-inline-start:"/home/sumedhe/Project/beacona/Beacona/src/pages/map/map.html"*/`<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div #map id="map"></div>\n</ion-content>\n`/*ion-inline-end:"/home/sumedhe/Project/beacona/Beacona/src/pages/map/map.html"*/,
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
            selector: 'page-wishlist',template:/*ion-inline-start:"/home/sumedhe/Project/beacona/Beacona/src/pages/wishlist/wishlist.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Wishlist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-9>\n                <ion-item>\n                    <ion-input #nameInput id="nameInput" class="item-name-input" type="text" value=""\n                    placeholder="Add to wishlist" [(ngModel)]="itemNameInput" clearInput></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col col-1>\n                <button ion-button icon-only (click)="addItem(itemNameInput)">\n                    <ion-icon name="add"></ion-icon>\n                </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <ion-list>\n                      <ion-card #itemcard class="item-card animated fadeInLeft" *ngFor="let item of itemKeys; let i = index;" (press)="itemClick(i)">\n                          <ion-row>\n                              <ion-col col-9>\n                                  <ion-card-header class="item-card-header">{{item.name}}</ion-card-header>\n                              </ion-col>\n                              <ion-col col-3>\n                                  <button class="item-card-remove-button" ion-button icon-only clear medium (click)="removeItem(i)">\n                                      <ion-icon name="close-circle"></ion-icon>\n                                  </button>\n                              </ion-col>\n                          </ion-row>\n                      </ion-card>\n                  </ion-list>\n            </ion-col>\n          </ion-row>\n          </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/home/sumedhe/Project/beacona/Beacona/src/pages/wishlist/wishlist.html"*/,
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
            selector: 'page-preference-popover',template:/*ion-inline-start:"/home/sumedhe/Project/beacona/Beacona/src/pages/preference-popover/preference-popover.html"*/`<!-- <ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content style="padding: 1em;">\n  <ion-title>{{itemKeys[itemKeyIndex].name}} preferences</ion-title>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        Tags\n      </ion-col>\n      <ion-row>\n          <ion-col col-9>\n              <ion-item>\n                  <ion-input #nameInput id="tagInput" class="tag-name-input" type="text" value=""\n                  placeholder="Add tag" [(ngModel)]="tagNameInput" clearInput></ion-input>\n              </ion-item>\n          </ion-col>\n          <ion-col col-1>\n              <button ion-button icon-only (click)="addTag(tagNameInput)">\n                  <ion-icon name="add"></ion-icon>\n              </button>\n          </ion-col>\n        </ion-row>\n      <ion-col col-12>\n        <ion-chip *ngFor="let tag of (itemKeys[itemKeyIndex]).tags; let i = index;" \n        style="margin-right: 1em;">\n          <ion-label>{{tag}}</ion-label>\n          <button ion-button clear color="light" (click)="deleteChip(i)">\n            <ion-icon name="close-circle"></ion-icon>\n          </button>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n    <ion-row radio-group>\n      <ion-col col-12>\n        Price\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>Low</ion-label>\n          <ion-radio value="l" checked="{{(itemKeys[itemKeyIndex]).isLowestPrice == true}}"\n          (click)="setPrice(true)"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>High</ion-label>\n          <ion-radio value="h" checked="{{(itemKeys[itemKeyIndex]).isLowestPrice == false}}"\n          (click)="setPrice(false)"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row radio-group>\n        <ion-col col-12>\n            Location\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label>Near</ion-label>\n              <ion-radio value="n" checked="{{(itemKeys[itemKeyIndex]).isNearest == true}}"\n              (click)="setLocation(true)"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label>Far</ion-label>\n              <ion-radio value="f" checked="{{(itemKeys[itemKeyIndex]).isNearest == false}}"\n              (click)="setLocation(false)"></ion-radio>\n            </ion-item>\n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/home/sumedhe/Project/beacona/Beacona/src/pages/preference-popover/preference-popover.html"*/,
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
        this.items = [];
        this.notifications = [];
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
        // this.notifications = [new Notification('First'), new Notification('Second'), new Notification('Third')];
        // var a:Notification = new Notification('xx');
        // this.num = a.name;
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
    };
    NotificationsPage.prototype.loadNotifications = function () {
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/sumedhe/Project/beacona/Beacona/src/pages/notifications/notifications.html"*/`<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="" *ngFor="let item of notifications">\n        \n      <!-- General Ad -->\n      <ion-card *ngIf="item.type == \'1\'">\n        <ion-thumbnail item-start>\n            <img src="{{ item.thumbnail }}">\n          </ion-thumbnail>\n        <ion-card-content> {{ item.description }} </ion-card-content>\n      </ion-card>\n\n      <!-- General Notification -->\n      <ion-card *ngIf="item.type == \'2\'">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="{{ item.thumbnail }}">\n            </ion-thumbnail>\n            <h2>{{ item.name }}</h2>\n            <h3>{{ item.shopName}}</h3>\n    \n            <h5>\n                <span item-left> {{ item.price }}</span>\n                <span item-left>  </span>\n                <b><span item-right></span></b>    \n            </h5>\n          </ion-item>\n        </ion-card>\n\n        <!-- No image Ad -->\n        <!-- <ion-card *ngIf="item.type == \'3\'">\n            <ion-card-header>\n              Header\n            </ion-card-header>\n            <ion-card-content>\n              The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n            </ion-card-content>\n          </ion-card> -->\n\n\n\n        <!-- CARD -->\n        <ion-card  *ngIf="item.type == \'3\'">\n            \n              <img src="{{ item.thumbnail }}">            \n              <ion-item>\n                  <!-- <ion-icon name="mail" item-left large ></ion-icon> -->\n                  <h2>Cool Planet</h2>\n                  <p>61, Isipathana Mawatha, Colombo</p>\n                </ion-item>\n\n              <ion-item>\n                <!-- <ion-icon name="football" item-start large></ion-icon> -->\n                <h2>Opal</h2>\n                <p>De S. Jayasinghe Mawatha, Nugegoda</p>\n              </ion-item>\n            \n              <ion-item>\n                <!-- <span item-left>Limited Offer</span> -->\n                <!-- <span item-left>(2.6 mi)</span> -->\n                <button ion-button icon-left clear item-end>\n                  <ion-icon name="map"></ion-icon>\n                  Show in map\n                </button>\n              </ion-item>\n            \n            </ion-card>\n\n    </div>\n\n</ion-content>\n`/*ion-inline-end:"/home/sumedhe/Project/beacona/Beacona/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], NotificationsPage);
    return NotificationsPage;
    var _a, _b;
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
            selector: 'page-deals',template:/*ion-inline-start:"/home/sumedhe/Project/beacona/Beacona/src/pages/settings/settings.html"*/`<!--\n  Generated template for the DealsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/home/sumedhe/Project/beacona/Beacona/src/pages/settings/settings.html"*/,
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/sumedhe/Project/beacona/Beacona/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/home/sumedhe/Project/beacona/Beacona/src/app/app.html"*/
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