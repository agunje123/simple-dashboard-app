import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable()
export class UtilPaginatorI18n implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = 'Prva stranica';
  itemsPerPageLabel = 'Pokemoni po stranici:';
  lastPageLabel = 'Zadnja stranica';
  nextPageLabel = 'Iduća stranica';
  previousPageLabel = 'Prethodna stranica';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return 'Stranica 1 od 1';
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Stranica ${page + 1} od ${amountPages}`;
  }
}
