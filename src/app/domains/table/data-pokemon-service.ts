import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { NamedAPIResourceList, Pokemon } from './data-pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class DataPokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  private http = inject(HttpClient);

  getPokemonList(limit: number, offset: number): Observable<Pokemon[]> {
    return this.http
      .get<NamedAPIResourceList>(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        switchMap((response) => {
          const requests = response.results.map((pokemon) => this.http.get<Pokemon>(pokemon.url));
          return forkJoin(requests);
        })
      );
  }
}
