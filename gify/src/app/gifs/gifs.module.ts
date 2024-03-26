import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';
import { GifsListComponent } from './components/gifs-list/gifs-list/gifs-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';

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
