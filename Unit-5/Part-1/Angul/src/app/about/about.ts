import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {
  message = "";

  constructor(private service: Service){
    this.message = this.service.getMessage();
  }

}
