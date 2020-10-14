import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConsumoPokeAPIService {

  iterator = 1;

  url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'
  urlByType = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private _http: HttpClient) {
    console.log('inyectando servicio')
  }

  getConsumo() {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

    return this._http.get(this.url, {
      headers: header
    })
  }

  getConsumoPokemonType() {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

    return this._http.get(this.urlByType+this.iterator, {
      headers: header
    })
    this.iterator+1;
  }
}
