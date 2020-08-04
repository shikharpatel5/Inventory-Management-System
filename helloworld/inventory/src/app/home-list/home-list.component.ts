import { Component, OnInit } from '@angular/core';
import { inventory } from '../inventory';
import { InventoryServiceService } from '../inventory-service.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [InventoryServiceService]
})
export class HomeListComponent implements OnInit {
movies: inventory[]

  constructor(private foodService: InventoryServiceService) { }

  ngOnInit() {
  
  this.foodService
       .getFoods()
       .then((movies: inventory[]) => {
       this.movies = movies.map(movie => {
       return movie;
       });
       });
  }

}
