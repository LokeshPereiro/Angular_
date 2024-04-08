import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          { label: 'Números', icon: 'pi  pi-dollar', routerLink: 'numbers' },
          { label: 'No Comunes', icon: 'pi  pi-globe', routerLink: 'uncommon' },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cogs',
        items: [
          {
            label: 'Otro elemento',
          },
        ],
      },
    ];
  }
}
