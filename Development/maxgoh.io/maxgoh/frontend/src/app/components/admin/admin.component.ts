import { Component, OnInit } from '@angular/core';
import { ContentChildren, QueryList } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';

interface PostCount {
  draft: number; 
  publish: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private isActive: boolean = false;
  public postCount: PostCount;

  constructor(private _blogService: BlogService) {
    this.getPostCount();
  }

  ngOnInit() {
  }

  getPostCount() {
    this._blogService.getDraftAndPublishCount()
      .subscribe(
        resp => {
          console.log(resp);
          this.postCount = resp;
          console.log('sada', this.postCount);
        }
      )
  }

}
