import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Post} from "../post.model";
import {PostService} from "../post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../post.model";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})

export class PostCardComponent implements OnInit, OnDestroy {

  // Post data from the parent component
  @Input() postData: Post | undefined;

  // Get the paramId from the URL
  paramId: number = this.activeParam.snapshot.params['id'];

  // Comment data
  commentPosts: Comment[] = [];

  // Form Group instance
  postForm: FormGroup = new FormGroup({})

// Subscription instance
  private subscription: Subscription | undefined;

  // Show comments
  showComments: boolean = true;


  constructor(private postService: PostService, private router: Router, private activeParam: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the post details
    this.detailPost(this.paramId);
    // Get the comments
    this.subscription = this.postService.getPostComments(this.paramId).subscribe(comments => {
      this.commentPosts = comments;
    })
    // Update Post
    this.postForm = new FormGroup({
      userId: new FormControl(Math.floor(Math.random() * 1000), []),
      id: new FormControl(Math.floor(Math.random() * 1000), []),
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      body: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  // Unsubscribe from the subscription
  ngOnDestroy(): void {
    // Check if the subscription is defined
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log("Unsubscribed Card Component")
    }
  }

  // Get the post details
  detailPost(id: number) {
    this.postService.getPost(id).subscribe(post => {
      this.postData = post;
      // Patch the value of the postForm
      this.postForm.patchValue({
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body
      });
    });
  }

  // Update the post
  toggleComments(): void {
    this.showComments = !this.showComments;
  }


}
