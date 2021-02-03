import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

import {
   debounceTime, delay, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService,
              public router: Router) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  refresh(): void {
    const currentUrl = this.router.url;
    setTimeout(() => {
      if (currentUrl !== this.router.url) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.navigateByUrl(this.router.url);
      }
    }, 300);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(

      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );

  }

}
