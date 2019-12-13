import { HeroService } from "./../hero.service";
import { HeroComponent } from "./../hero/hero.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: HeroComponent[];
  selectedHero: HeroComponent;
  onSelect(hero: HeroComponent): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
}
