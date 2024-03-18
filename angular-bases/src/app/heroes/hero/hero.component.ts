import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  heroDescription(): string {
    return `Héroe: ${this.name} - Edad: ${this.age}`;
  }

  cambiarNombre(nombre: string): void {
    this.name = nombre;
  }

  cambiarEdad(edad: number): void {
    this.age = edad;
  }
}
