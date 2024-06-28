import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {Post} from "../post.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  // initial loading
  loadingPost: boolean = false;
  // catch the paramId from the URL
  paramId: number = this.activeParam.snapshot.params['id'];

  // Subscription

  constructor(private postService: PostService, private router:Router, private activeParam: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // Navigate back to the post list
  backToPostList() {
    this.router.navigate(['/post']);
  }

  // Delete the post return to the post list
  deletePost() {
    this.postService.deletePost(this.paramId).subscribe(() => {
      this.router.navigate(['/post']);
    });
  }

}
