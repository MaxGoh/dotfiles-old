import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../services/blog/blog.service';
import { Router, ActivatedRoute } from '@angular/router';

interface PostDetail {
  id: number;
  title: string;
  body: string;
  last_updated: Date;
  created_on: Date;
}

@Component({
  selector: 'app-published-details',
  templateUrl: './published-details.component.html',
  styleUrls: ['./published-details.component.css']
})
export class PublishedDetailsComponent implements OnInit {
  public postDetail: PostDetail;
  public id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _blogService: BlogService
  ) {
    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.id = Number(params['id']);
          console.log(this.id)
        }
      }
    )
    this.getDraftDetails(this.id);
  }

  ngOnInit() {
  }

  getDraftDetails(id: number) {
    this._blogService.getSelectedDraft(id)
      .subscribe(
        data => this.postDetail = data.draft,
        error => console.log(error)
      )
  };

  deleteDraft(id: number) {
    this._blogService.deletePost(id)
      .subscribe(
        data => {
          if (data.status === 'success') {
            this.router.navigate(['/admin']);
          } 
        },
        error => console.log(error)
      )
  };

  onUnpublishPost(id: number) {
    this._blogService.unpublishPost(id)
      .subscribe(
        data => {
          if (data.status === 'success') {
            this.router.navigate(['/admin']);
          }
        }
      )
  };


}
