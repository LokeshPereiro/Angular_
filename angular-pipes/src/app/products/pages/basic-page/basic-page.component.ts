import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export class BasicPageComponent {
  public nameLower: string = 'LOKESH';
  public nameUpper: string = 'lokesh';
  public titleCase: string = 'lOKESh pERIorO';
  public customDate: Date = new Date();
}
