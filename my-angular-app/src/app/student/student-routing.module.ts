import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPageComponent } from "./student-page/student-page.component";
import { DashboardLayoutComponent } from "../layout/dashboard-layout/dashboard-layout.component";
import { StudentActiveComponent } from "./student-active/student-active.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: StudentActiveComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
