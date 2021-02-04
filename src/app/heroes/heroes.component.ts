import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogFormAddComponent } from '../dialog-form-add/dialog-form-add.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getHeroes();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogFormAddComponent);

    dialogRef.afterClosed().subscribe(()=> {
      this.getHeroes();
    })
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
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes =  heroes);
  }

  displayedColumns: string[] = ['id', 'name', 'actions'];
}
