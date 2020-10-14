import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ConsumoPokeAPIService } from '../../Services/consumo-poke-api.service'

@Component({
  selector: 'app-c-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public pokemonMain: Array<any> = []
  public pokemonType: Array<any> = []
  
  constructor(private ConsumoPokeAPIServiceMain: ConsumoPokeAPIService) {

    this.ConsumoPokeAPIServiceMain.getConsumo().subscribe((resp: any) => {

      this.pokemonMain = resp['results']
      const tipos = this.pokemonMain
      console.log(this.pokemonMain)

    })

    this.ConsumoPokeAPIServiceMain.getConsumoPokemonType().subscribe((resp: any) => {

      this.pokemonType = resp['types']
      console.log(this.pokemonType)

    })
  }

  ngOnInit(): void {
  }

  cargarPokeTipos(i){
    console.log('i')
  }

}
