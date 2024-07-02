import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule} from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatChipsModule } from "@angular/material/chips";
import { MatTabsModule } from "@angular/material/tabs";


@NgModule( {
  imports: [ MatSlideToggleModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatMenuModule, MatChipsModule, MatTabsModule ],
  exports: [ MatSlideToggleModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatMenuModule, MatChipsModule, MatTabsModule ]
} )
export class MaterialModule {
}
