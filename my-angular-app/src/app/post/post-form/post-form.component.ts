import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {PostService} from "../post.service";
import {Post} from "../post.model";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, OnDestroy {
  // Create a FormGroup instance
  postForm = new FormGroup({
    userId: new FormControl(Math.floor(Math.random() * 1000), []),
    id: new FormControl(Math.floor(Math.random() * 1000), []),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    body: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  // Define the @Input() postId property
  @Input() postId: number | undefined;
  // Define the @Output() closeDialog property
  @Output() closeDialog = new EventEmitter<void>();

  // Define the subscription property and set it to undefined
  private subscription: Subscription | undefined;
  // Define the formChanged property and set it to false
  formChanged: boolean = false;

  // Inject the PostService service
  constructor(private postService: PostService) {}


  ngOnInit(): void {
    // Check if the postId property is defined
    if (this.postId) {
      // Call the getPost() method of the PostService service
      this.postService.getPost(this.postId).subscribe(post => {
        this.postForm.patchValue({
          userId: post.userId,
          id: post.id,
          title: post.title,
          body: post.body
        });
      });
    }

    // Subscribe to the valueChanges event of the postForm
    this.subscription = this.postForm.valueChanges.subscribe(() => {
      this.formChanged = true;
    });
  }

  // close the dialog
  cancelDialog(): void {
    this.closeDialog.emit();
  }

  // unsubscribe from the subscription
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Unsubscribed Form');
    }
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      if (this.postId && this.postForm.value ) {
        this.postService.updatePost(this.postId, <Post>this.postForm.value).subscribe(() => {
          this.closeDialog.emit();
        });
      } else {
        this.postService.addPost(this.postForm.value).subscribe(() => {
          this.closeDialog.emit();
        });
      }
      this.cancelDialog()
    }
  }
}
