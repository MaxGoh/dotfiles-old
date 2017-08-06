import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { Posts } from '../../models/post.model';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public posts: Posts[];
  public tags: string[];

  constructor(
    private _blogService: BlogService,
    private _loadingService: LoadingService, 

  ) {
    this.getAllPosts(); 
  }

  ngOnInit() {
    this._loadingService.startLoading();
  }

  getAllPosts() {
    this._blogService.getAllPublishedPost().
      subscribe(
        resp => {
          this.posts = resp.posts;
        },
        error => {
          console.log(error);
        }
      )
  }

}
