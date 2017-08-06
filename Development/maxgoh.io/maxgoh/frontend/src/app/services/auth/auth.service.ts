import { Injectable } from '@angular/core';
import {
  Http,
  URLSearchParams,
  Headers,
  RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  private apiurl: string = environment.apiUrl;

  constructor(private http: Http) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.apiurl + '/account/login',
      {'username': username, 'password': password}
    )
      .map(data => data.json());
  }

  logout() {
    let headers = new Headers({ 'Authorization': JSON.parse(localStorage.getItem('jwt'))['authtoken'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiurl + '/account/logout', {}, options) 
      .map(data => data.json());
  }

  isLoggedIn() {
    let jwt_exist = localStorage.getItem('jwt')
    if (!jwt_exist) {
      return true; 
    }
    return false;
  }
} 
