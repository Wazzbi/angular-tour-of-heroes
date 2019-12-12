import { HEROES } from "./../mock-heroes";
import { HeroComponent } from "./../hero/hero.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: HeroComponent;
  onSelect(hero: HeroComponent): void {
    this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit() {}
}
