import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  menuToggle: boolean = false;

  constructor() { }

  toggleMenu() {
    this.menuToggle = !this.menuToggle;
    console.log(this.menuToggle);
  };
}
