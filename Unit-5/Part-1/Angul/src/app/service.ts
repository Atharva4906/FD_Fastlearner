import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {
  message = "Hello from Angular service , sevice.ts";

  getMessage(){
    return this.message;
  }
}
