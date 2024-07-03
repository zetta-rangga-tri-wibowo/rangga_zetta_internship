import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private transform: TranslateService) {
    this.transform.setDefaultLang('en');
  }

  changeLanguage(lang: string) {
    this.transform.use(lang);
  }
}
