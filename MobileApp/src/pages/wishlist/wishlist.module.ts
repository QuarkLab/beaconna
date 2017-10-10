import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WishlistPage } from './wishlist';

import { AnimationService, AnimatesDirective } from 'css-animator';

@NgModule({
  declarations: [
    WishlistPage,
    AnimatesDirective    
  ],
  imports: [
    IonicPageModule.forChild(WishlistPage),
  ],
  providers: [
    AnimationService
  ]
})
export class WishlistPageModule {}
