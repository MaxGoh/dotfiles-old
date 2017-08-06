import { Component } from '@angular/core';
import { MenuService } from './services/menu/menu.service';
import { Observable } from 'rxjs/Rx';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth/auth.service'
declare var ga:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  constructor(
    private _authService: AuthService,
    public _menu: MenuService,
    private router: Router,
  ) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        } 
      } 
    ) 
  }

  isLoggedIn() {
    let jwt_exist = localStorage.getItem('jwt')
    if (!jwt_exist) {
      return true; 
    }
    return false;
  };

  signOut() {
    this._authService.logout() 
      .subscribe(
        data => {
          console.log(data); 
          if (data.status === 'success') {
            console.log('log out succeeded')
            localStorage.removeItem('jwt');
            this.router.navigate(['/']);
          }
        } 
      )
  };

  toggleMenu() {
    this._menu.toggleMenu();
  }
}
