import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePokeComponent } from './componente-poke.component';

describe('ComponentePokeComponent', () => {
  let component: ComponentePokeComponent;
  let fixture: ComponentFixture<ComponentePokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentePokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
