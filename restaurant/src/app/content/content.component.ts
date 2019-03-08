import { Component, OnInit } from '@angular/core';
import { RestaurantService} from '../restaurant.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  
})
export class ContentComponent implements OnInit {
  public query:string;
  public p:any;
  public restaurant = [];
  constructor(private _restaurantService : RestaurantService) { }

  ngOnInit() {
    this._restaurantService.getRestaurant()
      .subscribe(data => this.restaurant = data)
  }

}
