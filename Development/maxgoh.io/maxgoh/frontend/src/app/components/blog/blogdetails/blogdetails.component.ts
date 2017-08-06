import { Component, OnInit, Input, Inject } from '@angular/core';
import { BlogService } from '../../../services/blog/blog.service';
import { PostDetail } from '../../../models/post.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  public detail: PostDetail;
  public slug: string;
  public shareURL: string;
  @Input() public post_id: number;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _blogService: BlogService,
    private route: ActivatedRoute,
  ) {
      console.log(this.document.location.href);
      this.shareURL = `https://twitter.com/tweet/intent?text=${this.document.location.href}`;
      this.route.params
      .subscribe(
        params => {
          if (params['slug']) {
            this.slug = String(params['slug']);
          }
        }
      )
  }

  ngOnInit() {

    this._blogService.getPublishedPostDetail(this.slug)
      .subscribe(
        resp => {
          this.detail = resp.detail;
        },
        error => {
          console.log(error);
        }
      )
  }
}
