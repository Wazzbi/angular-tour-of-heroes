import { MessageService } from "./message.service";
import { HEROES } from "./mock-heroes";
import { HeroComponent } from "./hero/hero.component";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private heroesUrl = "api/heroes"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  /* Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(
      `${new Date().toLocaleTimeString()} \xa0\xa0 HeroService: ${message}`
    );
  }

  /** GET heroes from the server */
  getHeroes(): Observable<HeroComponent[]> {
    return this.http.get<HeroComponent[]>(this.heroesUrl).pipe(
      tap(_ => this.log(`fetched heroes`)),
      catchError(this.handleError<HeroComponent[]>("getHeroes", []))
    );
  }
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<HeroComponent> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<HeroComponent>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<HeroComponent>(`getHero id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** PUT: update the hero on the server */
  updateHero(hero: HeroComponent): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>("updateHero"))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: HeroComponent): Observable<HeroComponent> {
    return this.http
      .post<HeroComponent>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: HeroComponent) =>
          this.log(`added hero w/ id=${newHero.id}`)
        ),
        catchError(this.handleError<HeroComponent>("addHero"))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: HeroComponent | number): Observable<HeroComponent> {
    const id = typeof hero === "number" ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<HeroComponent>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<HeroComponent>("deleteHero"))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<HeroComponent[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http
      .get<HeroComponent[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found heroes matching "${term}"`)),
        catchError(this.handleError<HeroComponent[]>("searchHeroes", []))
      );
  }
}
