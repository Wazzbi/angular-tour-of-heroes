import { HEROES } from "./mock-heroes";
import { HeroComponent } from "./hero/hero.component";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  getHeroes(): HeroComponent[] {
    return HEROES;
  }

  constructor() {}
}
