import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FormsModule } from '@angular/forms';
import {SharedModule} from "../shared/shared.module";


@NgModule({
    declarations: [
        HeroListComponent
    ],
    exports: [
        HeroListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ]
})
export class HeroModule { }
