import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ConsumoPokeAPIService } from '../../../Services/consumo-poke-api.service'

@Component({
  selector: 'app-c-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  public pokemonPoke: Array<any> = []
  public pokemonType: Array<any> = []

  constructor(private ConsumoPokeAPIServicePoke: ConsumoPokeAPIService) {
    this.ConsumoPokeAPIServicePoke.getConsumo().subscribe((resp: any) => {

    this.pokemonPoke = resp['results']
    const refPokemon = this.pokemonPoke
    console.log(refPokemon)
    console.log('card')
    })

    this.ConsumoPokeAPIServicePoke.getConsumoPokemonType().subscribe((resp: any) => {
      this.pokemonType = resp['type']
      const refPokemonType = this.pokemonType
      console.log(refPokemonType)
      console.log('card')
      })
  }

  ngOnInit(): void {
  }

}
