import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog/blog.service';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-published-list',
  templateUrl: './published-list.component.html',
  styleUrls: ['./published-list.component.css']
})
export class PublishedListComponent implements OnInit {
  posts: Post[];

  constructor(private _blogService: BlogService) {
    this.getAllPublishedPost();
  }

  ngOnInit() {
  }

  getAllPublishedPost() {
    this._blogService.getAllPublishedPost()
      .subscribe(
        data => {
          this.posts = data.posts;
        }
      )
  }

  deletePost(post_id: number) {
    this._blogService.deletePost(post_id)
      .subscribe(
        data => {
          if (data.status === 'success') {
            this.getAllPublishedPost();
          }
        }
      )
  }

}
