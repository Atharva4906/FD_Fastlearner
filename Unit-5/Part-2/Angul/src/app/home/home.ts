import { Component } from '@angular/core';
import { Service } from "../service";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  message = "";

  constructor(private service : Service){
    this.message = this.service.getMessage();
  }

}
