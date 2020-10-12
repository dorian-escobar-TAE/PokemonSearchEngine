import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePokeComponent } from './componente-poke/componente-poke.component';
import { ComponenteHeaderComponent } from './componente-header/componente-header.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { MainComponent } from './Componentes/main/main.component';
import { PokeCardComponent } from './Componentes/main/poke-card/poke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePokeComponent,
    ComponenteHeaderComponent,
    HeaderComponent,
    MainComponent,
    PokeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
