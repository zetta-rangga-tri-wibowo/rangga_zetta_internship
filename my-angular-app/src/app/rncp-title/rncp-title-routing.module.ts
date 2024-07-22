import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RncpTitlePageComponent } from "./rncp-title-page/rncp-title-page.component";
import { DashboardLayoutComponent } from "../layout/dashboard-layout/dashboard-layout.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: RncpTitlePageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RncpTitleRoutingModule { }
