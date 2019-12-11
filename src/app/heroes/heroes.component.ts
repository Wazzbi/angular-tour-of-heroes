import { HeroComponent } from "./../hero/hero.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  hero: HeroComponent = {
    id: 1,
    name: "Windstorm",
    //'ngOnInit() {}' vlozeno jen aby to nehazelo chybu - kdyztak vyhodit
    ngOnInit() {}
  };

  constructor() {}

  ngOnInit() {}
}
