// PostListComponent
import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[] = [];

  placeholder = 'https://via.placeholder.com/300x200';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  detailPost(id: number) {
    this.router.navigate(['/post', id]);
  }
}
