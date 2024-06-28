import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostCardComponent } from './post-card/post-card.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { PostDetailComponent } from './post-detail/post-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TruncatePipe} from "../pipe/truncate.pipe";
import { PostCommentComponent } from './post-comment/post-comment.component';


const routes: Routes = [
  {
    path: '', component: PostPageComponent,
    children: [
      {
        path: 'post',
        component: PostPageComponent
      }
    ]
  },
  {
    path: ':id', component: PostDetailComponent
  }
]

@NgModule({
  declarations: [
    PostListComponent,
    PostFormComponent,
    PostPageComponent,
    PostCardComponent,
    PostDetailComponent,
    TruncatePipe,
    PostCommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class PostModule { }
