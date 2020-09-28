import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: String;
  public year: number;

  constructor(){
    this.title = "ISE - engineering group";
    this.year = 2020
  }
}
