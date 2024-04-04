import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages';

import {
  GifsCardComponent,
  GifsListComponent,
  SearchBoxComponent,
} from './components';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    GifsListComponent,
    GifsCardComponent,
    GifsCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
