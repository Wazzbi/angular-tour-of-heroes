import { HeroComponent } from "./hero/hero.component";

export const HEROES: HeroComponent[] = [
  //'ngOnInit() {}' vlozeno jen aby to nehazelo chybu - kdyztak vyhodit
  { id: 11, name: "Dr Nice", ngOnInit() {} },
  { id: 12, name: "Narco", ngOnInit() {} },
  { id: 13, name: "Bombasto", ngOnInit() {} },
  { id: 14, name: "Celeritas", ngOnInit() {} },
  { id: 15, name: "Magneta", ngOnInit() {} },
  { id: 16, name: "RubberMan", ngOnInit() {} },
  { id: 17, name: "Dynama", ngOnInit() {} },
  { id: 18, name: "Dr IQ", ngOnInit() {} },
  { id: 19, name: "Magma", ngOnInit() {} },
  { id: 20, name: "Tornado", ngOnInit() {} }
];
