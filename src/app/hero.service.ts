import { MessageService } from "./message.service";
import { HEROES } from "./mock-heroes";
import { HeroComponent } from "./hero/hero.component";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  getHeroes(): Observable<HeroComponent[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add(
      `${new Date().toLocaleTimeString()} \xa0\xa0 HeroService: fetched heroes`
    );
    return of(HEROES);
  }
  getHero(id: number): Observable<HeroComponent> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(
      `${new Date().toLocaleTimeString()} \xa0\xa0 HeroService: fetched hero id=${id}`
    );
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) {}
}
