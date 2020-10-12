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

  constructor(private ConsumoPokeAPIServiceMain: ConsumoPokeAPIService) {

    this.ConsumoPokeAPIServiceMain.getConsumo().subscribe((resp: any) => {

      this.pokemonMain = resp['results']
      console.log(this.pokemonMain)

    })

  }

  ngOnInit(): void {
  }

}
