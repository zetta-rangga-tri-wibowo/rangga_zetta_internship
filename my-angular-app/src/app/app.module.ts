import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/course/list/list.component';
import { DetailComponent } from './component/course/detail/detail.component';
import { PriceComponent } from './component/course/price/price.component';
import { HeaderComponent } from './component/header/header.component';
import { FilterComponent } from './component/filter/filter.component';
import {EnrollComponent} from "./component/course/enroll/enroll.component";
import {SharedModule} from "./shared/shared.module";
import { CardComponent } from './component/course/card/card.component';
import { SearchComponent } from './component/search/search.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EnrollComponent,
    ListComponent,
    DetailComponent,
    PriceComponent,
    HeaderComponent,
    FilterComponent,
    CardComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
