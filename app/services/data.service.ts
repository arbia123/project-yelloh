import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
isvisible =false;
name: any;
  constructor() { }

  getShow() {
    this.isvisible = true;
    console.log(this.isvisible);
    
    // if (this.isvisible ){
    //   this. name = 'show'
    //   return true;
    // }
    // else 
    // {this.name='Hide'}
  
  }

}
