import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/shared/models/Post';
import { User } from 'src/app/shared/models/User';
import { ForumService } from 'src/app/shared/services/forum.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit, OnChanges {

  user?: User;

  postForm = this.createForm({
    user_name: '',
    content: '',
    date: 0,
  });

  posts: Array<Post> = [];

  constructor(private fb: FormBuilder, private userService: UserService, private forumService: ForumService, private router: Router) { }

  
  ngOnChanges(): void {
    this.forumService.getAll().subscribe(post => {
      this.posts = post;
    })
  }
  
  createForm(model: Post) {
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      console.log(this.user?.username)
      this.postForm.get('user_name')?.setValue(this.user?.username);
      console.log(this.postForm)
    }, error => {
      console.log(error);
    })
    this.forumService.getAll().subscribe(post => {
      this.posts = post;
    })
  }
  

  addPost() {
    if (this.postForm.valid) {
      if (this.postForm.get('user_name') && this.postForm.get('content')) {
        this.postForm.get('date')?.setValue(new Date().getTime());
        this.forumService.create(this.postForm.value).then();
      }
    }
  }
}
