import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  defaultLang = 'en';

  constructor(private translate: TranslateService) {
    if(!localStorage.getItem('lang')) {
      localStorage.setItem('lang', this.defaultLang);
      translate.setDefaultLang(this.defaultLang)
    } else {
      translate.setDefaultLang(localStorage.getItem('lang'))
    }
  }

  changeLang() {
    if (this.defaultLang === 'en') {
      this.defaultLang = 'ru';
      this.translate.use('ru');
      localStorage.setItem('lang', 'ru')
    } else {
      this.defaultLang = 'en';
      this.translate.use('en');
      localStorage.setItem('lang', 'en')
    }
  }
}
