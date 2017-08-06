import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu/menu.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isLoggedIn: Boolean = false;

  constructor(
    private router: Router,
    private _menu: MenuService,
    private _auth: AuthService,
  ) { this.isLoggedIn = _auth.isLoggedIn() }

  ngOnInit() {
  }

  goToAbout() {
    this._menu.toggleMenu();
    this.router.navigate(['/about']);
  };

  goToProject() {
    this._menu.toggleMenu();
    this.router.navigate(['/project']);
  };


  goToBlog() {
    this._menu.toggleMenu();
    this.router.navigate(['/blog']);
  };

  goToMemories() {
    this._menu.toggleMenu();
    this.router.navigate(['/memories']);
  };

  goToChallenges() {
    this._menu.toggleMenu();
    this.router.navigate(['/challenges']);
  };

  goToAdmin() {
    this._menu.toggleMenu();
    this.router.navigate(['/admin']);
  }

  goToLogin() {
    this._menu.toggleMenu();
    this.router.navigate(['/login']);
  }
}
