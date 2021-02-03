import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-form-add',
  templateUrl: './dialog-form-add.component.html',
  styleUrls: ['./dialog-form-add.component.css']
})
export class DialogFormAddComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  levelFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.max(100),
    Validators.min(1)
  ]);

  ageFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.max(100),
    Validators.min(1)
  ]);

  nameFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('^[a-zA-Z ]*')
  ]);

  classControl: FormControl = new FormControl('', Validators.required);

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes =  heroes);
  }

  add(name: string, age: number, level: number, heroClass: string): void {
    name = name.trim();
    this.heroService.addHero({ name, age, level, heroClass } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  anyErrors() {
    return this.classControl.invalid ||
           this.ageFormControl.invalid ||
           this.nameFormControl.invalid ||
           this.levelFormControl.invalid
  }
}
