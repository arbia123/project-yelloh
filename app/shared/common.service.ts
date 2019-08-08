import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private url1:string ='../../assets/data/DefRoomCategory.json'
  private url2:string ='../../assets/data/hotels.json'
  private url3: string = '../../assets/data/RoomCategoryType.json'
  hotel : any ;
  roomCategory: any;
  roomType : any ;
  constructor( private http : HttpClient) { }
  getRoomType(){
    return this.http.get(this.url1);
  }
  getRoomCategory (){
    return this.http.get(this.url3);
  }
  getHotels(){
    return this.http.get(this.url2); 
  }
  
}
