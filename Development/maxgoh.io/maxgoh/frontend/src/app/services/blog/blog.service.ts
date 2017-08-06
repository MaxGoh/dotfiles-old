import { Injectable } from '@angular/core';
import {
  Http,
  URLSearchParams,
  Headers,
  RequestOptions
} from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs'

@Injectable()
export class BlogService {
  private apiurl: string = environment.apiUrl;

  constructor(private http: Http) { }

  extractData(res: Response) {
    return res.json()
  }

  getUser(id: number): Observable<any> {
    return this.http.get(this.apiurl+'/api/user/1')
      .map(res => res.json());
  }

  createPost(title: string, body: string, category: string, tags: string) {
    let headers = new Headers({ 'Authorization': JSON.parse(localStorage.getItem('jwt'))['authtoken'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiurl+'/api/post/new', {'title': title, 'body': body, 'category': category, 'tags': tags}, options)
      .map(res => res.json());
  }

  getAllPost(): Observable<any> {
    return this.http.get(this.apiurl+'/api/1/post')
      .map(res => res.json());
  }

  getAllDrafts(): Observable<any> {
    let headers = new Headers({ 'Authorization': JSON.parse(localStorage.getItem('jwt'))['authtoken'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.apiurl+'/api/draft/all', options)
      .map(res => res.json());
  }

  getSelectedDraft(draft_id: number): Observable<any> {
    let headers = new Headers({ 'Authorization': JSON.parse(localStorage.getItem('jwt'))['authtoken'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.apiurl+'/api/draft/'+draft_id, options)
      .map(res => res.json());
  }

  deletePost(post_id: number): Observable<any> {
    let headers = new Headers({ 'Authorization': JSON.parse(localStorage.getItem('jwt'))['authtoken'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.apiurl+'/api/post/'+post_id, options)
      .map(res => res.json());
  }

  publishDraft(draft_id: number): Observable<any> {
    let headers = new Headers({ 'Authorization': JSON.parse(localStorage.getItem('jwt'))['authtoken'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiurl+'/api/draft/publish/'+draft_id, {}, options)
      .map(res => res.json());
  }

  getAllPublishedPost(): Observable<any> {
    return this.http.get(this.apiurl+'/api/post/publish/all')
      .map(res => res.json());
  }

  updateDraft(id: number, title: string, body: string): Observable<any> {
    let headers = new Headers({ 'Authorization': JSON.parse(localStorage.getItem('jwt'))['authtoken'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiurl+'/api/draft/edit/'+id, {'title': title, 'body': body}, options)
      .map(res => res.json());
  }

  getDraftAndPublishCount(): Observable<any> {
    let headers = new Headers({ 'Authorization': JSON.parse(localStorage.getItem('jwt'))['authtoken'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.apiurl+'/api/admin/post/count', options)
      .map(res => res.json());
  }

  unpublishPost(id: number): Observable<any> {
    let headers = new Headers({ 'Authorization': JSON.parse(localStorage.getItem('jwt'))['authtoken'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiurl+'/api/admin/unpublish/'+id, {}, options)
      .map(res => res.json());
  }

  getPublishedPostDetail(slug: string): Observable<any> {
     return this.http.get(this.apiurl+'/api/post/'+slug)
      .map(res => res.json());
 }

}
