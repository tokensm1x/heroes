import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Item } from '../items';
import { StoreService } from '../store.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  items: Item[] = [];

  pageItems: Item[];

  loaded: boolean = false;

  indexPage = 0;
  sizePage = 5;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.storeService.getItems()
      .subscribe(items => {
        this.items = items;
        this.loaded = !this.loaded;
        this.pageItems = this.items.slice(this.indexPage, this.sizePage);
      })
  }

  changePage(paginator: MatPaginator): void {
    if (!paginator.pageIndex) {
      this.pageItems = this.items.slice(this.indexPage, this.sizePage);
    }
    else {
      this.pageItems = this.items.slice(paginator.pageIndex * paginator.pageSize,
        (paginator.pageIndex * paginator.pageSize) + paginator.pageSize)
    }
  }

}
