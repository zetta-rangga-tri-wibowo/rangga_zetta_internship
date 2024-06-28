import {Component, OnInit, ViewChild} from '@angular/core';
import { PostService } from '../post.service';
import {Post} from "../post.model";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  posts: Post[] = [];

  loadingPosts: boolean = false;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadingPosts = true;
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      this.loadingPosts = false;
    });
  }
}
