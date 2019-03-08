import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from './restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private _url:string = "/assets/data/csvjson.json";

  constructor(private http: HttpClient) { }

  getRestaurant():Observable<IRestaurant[]>{
    return this.http.get<IRestaurant[]>(this._url);
  }
}
