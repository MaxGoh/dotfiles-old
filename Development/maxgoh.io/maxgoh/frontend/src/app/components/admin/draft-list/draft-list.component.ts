import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog/blog.service';

interface Draft {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-draft-list',
  templateUrl: './draft-list.component.html',
  styleUrls: ['./draft-list.component.css']
})

export class DraftListComponent implements OnInit {
  public drafts: Draft[];

  constructor(private _blogService: BlogService) {
    this.showDraftList();
    console.log(this.drafts);
  }

  ngOnInit() {
  }

  showDraftList() {
    this._blogService.getAllDrafts()
      .subscribe(
        data => {
          this.drafts = data.draft;
          console.log(data);
        } 
      )
  }

  deletePost(id: number) {
    this._blogService.deletePost(id)
      .subscribe(
        data => {
          if (data.status === 'success') {
            this.showDraftList();
          } 
        },
        error => console.log(error)
      )
  }

  publishDraft(id: number) {
    this._blogService.publishDraft(id)
      .subscribe(
        data => {
          console.log(data);
          this.showDraftList();
        },
        error => {
          console.log('hi');
          console.log(error);
        }
      )
  }

}
