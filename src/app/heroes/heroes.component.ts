import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  add(name: string, age: number, level: number, heroClass: string): void {
    name = name.trim();
    this.heroService.addHero({ name, age, level, heroClass } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes =  heroes);
  }

  levelFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.max(100)
  ]);

  ageFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.max(100)
  ]);

  nameFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('^[a-zA-Z ]*')
  ]);

  classControl: FormControl = new FormControl('', Validators.required);

  anyErrors() {
    if (this.classControl.hasError('required') ||
        this.ageFormControl.hasError('required') ||
        this.nameFormControl.hasError('required') ||
        this.nameFormControl.hasError('pattern') ||
        this.nameFormControl.hasError('minlength') ||
        this.ageFormControl.hasError('max') ||
        this.levelFormControl.hasError('max') ||
        this.levelFormControl.hasError('required')) {
    return true;
    }
    return false;
  }


}
