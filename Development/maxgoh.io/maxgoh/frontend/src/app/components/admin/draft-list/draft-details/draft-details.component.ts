import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../../services/blog/blog.service';

interface DraftDetail {
  id: number;
  title: string;
  body: string;
  last_updated: Date;
  created_on: Date;
}

@Component({
  selector: 'app-draft-details',
  templateUrl: './draft-details.component.html',
  styleUrls: ['./draft-details.component.css']
})

export class DraftDetailsComponent implements OnInit {
  public draft: DraftDetail;
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
        data => this.draft = data.draft,
        error => console.log(error)
      )
  }

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
  } 

}
