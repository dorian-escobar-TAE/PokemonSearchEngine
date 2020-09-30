import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePokeComponent } from './componente-poke/componente-poke.component';
import { ComponenteHeaderComponent } from './componente-header/componente-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePokeComponent,
    ComponenteHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
