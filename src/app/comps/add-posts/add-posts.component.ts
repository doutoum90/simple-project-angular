import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {
  dataModel: any;
  addNewPostForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.addNewPostForm = new FormGroup({
      name: new FormControl(''),
      title: new FormControl(''),
      category: new FormControl(''),
      author: new FormControl('Annour'),
      content: new FormControl(''),

    })
  }

  addNewPost(value: any) {
    console.log(this.dataModel)
  }

}
