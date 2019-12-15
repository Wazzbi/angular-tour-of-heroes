import { HEROES } from "./mock-heroes";
import { HeroComponent } from "./hero/hero.component";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  getHeroes(): Observable<HeroComponent[]> {
    return of(HEROES);
  }

  constructor() {}
}
