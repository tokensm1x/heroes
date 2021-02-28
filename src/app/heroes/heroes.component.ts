import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogFormAddComponent } from '../dialog-form-add/dialog-form-add.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetDialogComponent } from '../bottom-sheet-dialog/bottom-sheet-dialog.component';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  loaded: boolean = false;

  permission: string;

  read: boolean;

  constructor(private heroService: HeroService,
              public dialog: MatDialog,
              private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.getHeroes();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogFormAddComponent);

    dialogRef.afterClosed().subscribe(()=> {
      const lastHeroes = this.heroes;
      this.getHeroes();
      setTimeout(()=>{
        if (lastHeroes.toString() !== this.heroes.toString()) {
          const name = this.heroes[this.heroes.length - 1].name;
          this.openBottomSheet(name, 'added');
        }
      }, 500)
    })
  }

  openBottomSheet(hero, param): void {
    this._bottomSheet.open(BottomSheetDialogComponent, { data: {
      name: hero,
      param: param
    } });
  }

  openDialogDelete(hero) {
    const dialogRef = this.dialog.open(DialogDeleteComponent);

    dialogRef.afterClosed().subscribe((value)=> {
        if(value==='true') {
          this.delete(hero);
        };
    })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    this.openBottomSheet(hero.name, 'deleted');
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes =  heroes
      if(!this.loaded) this.loaded = !this.loaded;
      this.permission = localStorage.getItem('permission');
    });
  }

  displayedColumns: string[] = ['id', 'name', 'actions'];
}
