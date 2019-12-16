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
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  constructor(private messageService: MessageService) {}
}
