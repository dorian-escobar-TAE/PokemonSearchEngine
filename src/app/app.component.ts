import { Component } from '@angular/core';
import { ConsumoPokeAPIService } from './Services/consumo-poke-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: String;
  public year: number;

  public pokemonMain: Array<any> = []

  constructor(private ConsumoPokeAPIServiceMain: ConsumoPokeAPIService) {
    this.title = "PokeList";
    this.year = 2020

    this.ConsumoPokeAPIServiceMain.getConsumo().subscribe((resp: any) => {
      this.pokemonMain = resp['results']
      console.log(this.pokemonMain)
      var listadoMainPokemon = this.pokemonMain
      console.log('principal')
    })
    
  }
}
