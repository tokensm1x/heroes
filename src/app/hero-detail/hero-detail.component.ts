import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  heroes: Hero[];

  friendsControl: FormControl;

  heroesArr: any[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();

  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).
      subscribe(hero => {
        this.hero = hero;
        this.friendsControl = new FormControl(this.hero.friends)
      });
    this.getHeroes();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes.filter((el) => el.name !== this.hero.name);
    });
  }

  nameFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('^[a-zA-Z ]*')
  ]);


  anyErrors(): boolean {
    if (this.nameFormControl.hasError('required') ||
        this.nameFormControl.hasError('pattern') ||
        this.nameFormControl.hasError('minlength')) {
    return true;
    }
    return false;
  }

  selectedArr(str): void{

  }
}
