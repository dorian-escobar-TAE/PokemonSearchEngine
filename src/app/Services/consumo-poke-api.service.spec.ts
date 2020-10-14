import { TestBed } from '@angular/core/testing';

import { ConsumoPokeAPIService } from './consumo-poke-api.service';

describe('ConsumoPokeAPIService', () => {
  let service: ConsumoPokeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoPokeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
