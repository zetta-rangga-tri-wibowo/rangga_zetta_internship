// *************** Angular Imports ***************
import { Component } from '@angular/core';
// *************** Third-Party Library Imports ***************
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // *************** Constructor ***************
  /**
   * @param translate Service for handling translations
   */
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // Set default language to English
  }

  // *************** Public Methods ***************
  /**
   * Switches the language of the application.
   * @param language The language to switch to
   */
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
