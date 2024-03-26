import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get myTagsHistory(): string[] {
    return this.gifsService.tagsHistory;
  }
  searchHistoryTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
