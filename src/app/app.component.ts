import { Component } from '@angular/core';

import { PokeAPIService, Pokemon } from './table-data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-test';

  pokemons: Array<Pokemon> = []

  constructor(private poke_service: PokeAPIService) {}

  ngOnInit() {
    this.pokemons = this.poke_service.get_pokemons()
  }
}
