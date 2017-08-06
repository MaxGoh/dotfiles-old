import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../../../services/blog/blog.service';
import { Router, ActivatedRoute } from '@angular/router';

interface DraftDetail {
  id: number;
  title: string;
  body: string;
  last_updated: Date;
  created_on: Date;
}

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})

export class EditPostComponent implements OnInit {
  editForm: FormGroup;
  public draft: DraftDetail;
  public id: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _blogService: BlogService,
    private router: Router
  ) {
    this.createEditForm();
    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.id = Number(params['id']);
          console.log(this.id)
        }
      }
    )
    this.getDraft(this.id);
  }

  ngOnInit() {
  }

  createEditForm() {
    this.editForm = this.fb.group({
      title: '',
      body: '',
    });
  }

  getDraft(id: number) {
    this._blogService.getSelectedDraft(id)
      .subscribe(
        data => {
          // this.title = data.draft.title;
          // this.body = data.draft.body;
          this.draft = data.draft;
          console.log('draft', this.draft)
        },
        error => console.log(error)
      )
  }

  updateDraft(id: number, title: string, body: string) {
    this._blogService.updateDraft(id, title, body)
      .subscribe(
        data => {
          if (data.status === "success") {
            this.router.navigate(['/admin']);
          }
        },
      )
  };

}
