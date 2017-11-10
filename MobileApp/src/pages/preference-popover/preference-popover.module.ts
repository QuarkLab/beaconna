import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreferencePopoverPage } from './preference-popover';

@NgModule({
  declarations: [
    PreferencePopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(PreferencePopoverPage),
  ],
})
export class PreferencePopoverPageModule {}
