import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

import { FormControl, Validators, NgForm } from '@angular/forms';

import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetDialogComponent } from '../bottom-sheet-dialog/bottom-sheet-dialog.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material/dialog';


const logMethod = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
    if(localStorage.getItem('permission') !== 'write_access') {
      descriptor.value = () => {
        console.log('NO ACCESS');
      }
    };
};

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  newForm : NgForm;

  heroes: Hero[];

  friendsControl: FormControl;

  heroesArr: any[];

  loaded: boolean = false;

  info: boolean = true;

  items: string[];

  permission: string;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private _bottomSheet: MatBottomSheet,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  cardNav(nav): void {
    if (nav==='info') this.info = true;
    else this.info = false;
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).
      subscribe(hero => {
        this.hero = hero;
        this.friendsControl = new FormControl(this.hero.friends);
        this.loaded = !this.loaded;
      });
    this.getHeroes();
    this.permission = localStorage.getItem('permission');
  }

  goBack(): void {
    this.location.back();
  }

  @logMethod
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe();
    this.openBottomSheet(this.hero.name, 'saved');
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes.filter((el) => el.name !== this.hero.name);
    });
  }

  openBottomSheet(hero, param): void {
    this._bottomSheet.open(BottomSheetDialogComponent, { data: {
      name : hero,
      param: param
    } });
  }

  openDialogDelete(item) {
    const dialogRef = this.dialog.open(DialogDeleteComponent);

    dialogRef.afterClosed().subscribe((value)=> {
        if(value==='true') {
          this.delete(item);
        };
    })
  }

  delete(item: string): void {
    this.hero.items = this.hero.items.filter(i => i !== item);
    this.openBottomSheet(item, 'deleted');
  }

  nameFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('^[a-zA-Z ]*')
  ]);

  displayedColumns: string[] = ['name', 'actions'];
}
