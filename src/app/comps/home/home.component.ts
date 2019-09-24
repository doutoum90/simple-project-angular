import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(
      v => this.posts = v,
      err => console.log(err)
    );
  }
  addPost() {
    this.router.navigate(['add-posts'])
  }

}
