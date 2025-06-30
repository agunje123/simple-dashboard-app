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

  /**
   * Fetches a paginated list of Pokemon with detailed information.
   *
   * This method first retrieves a list of pokemon using the provided limit and offset.
   * It then fetches the full Pokemon details for each Pokemon in parallel.
   *
   * @param limit The maximum number of Pokemon to retrieve.
   * @param offset The number of Pokemon to skip.
   * @returns An Observable that emits an array of fully populated Pokemon objects.
   */
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
