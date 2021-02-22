import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth.service';
import { TranslatesService } from './translates.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';

  defaultLang = 'en';

  translatesLoaded = false;

  constructor(private translate: TranslateService,
    public translates: TranslatesService,
    public auth: AuthService) {
  }

  ngOnInit(): void {
      this.translates.getTranslates().subscribe((val) => {
        if ( JSON.stringify(val) === localStorage.getItem('translates')) {
          this.defaultLang = localStorage.getItem('lang')
          const en = JSON.parse(localStorage.getItem('translates'))[0];
          const ru = JSON.parse(localStorage.getItem('translates'))[1];
          this.translate.setTranslation('en', en);
          this.translate.setTranslation('ru', ru);
          this.translate.setDefaultLang(localStorage.getItem('lang'));
          this.translatesLoaded = true;
        } else {
          this.translate.setTranslation('en', val[0]);
          this.translate.setTranslation('ru', val[1]);
          this.translate.setDefaultLang('en');
          this.translatesLoaded = true;
          localStorage.setItem('translates', JSON.stringify(val));
          localStorage.setItem('lang', this.defaultLang);
          }
      })
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
