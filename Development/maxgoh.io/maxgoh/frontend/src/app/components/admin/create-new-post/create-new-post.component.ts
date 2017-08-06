import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../../../services/blog/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css']
})
export class CreateNewPostComponent implements OnInit {
  postForm: FormGroup;
  public title: string;
  public body: string;
  public category: string;
  public tags: string;

  constructor(
    private fb: FormBuilder,
    private _blogService: BlogService,
    private router: Router
  ) {
    this.createPostForm();
  }

  ngOnInit() {
    console.log(this.postForm);
  }

  createPostForm() {
    this.postForm= this.fb.group({
      title: '',
      body: '',
      category: '',
      tags: '',
    });
  };

  addDraft(title: string, body: string, category: string, tags: string) {
    this._blogService.createPost(title, body, category, tags).
      subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['/admin/draft']);
          this.body = '';
          this.title = '';
        } 
      )
  }

}
