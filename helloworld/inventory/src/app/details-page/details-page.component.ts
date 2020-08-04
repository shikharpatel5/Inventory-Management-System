import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { inventory } from '../inventory';
import { InventoryServiceService } from '../inventory-service.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [InventoryServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(
  private foodServiceService: InventoryServiceService,
  private route: ActivatedRoute
  ) { }
  
  
  newFood: inventory;
  ngOnInit(): void {
  this.route.params.pipe(
  switchMap((params: Params) => {
  return this.foodServiceService.getSingleFood(params['foodid'])
  
  }))
  .subscribe((newFood: inventory) => {
  this.newFood = newFood;
  this.pageContent.header.title = newFood.name;
  this.pageContent.header.body = "details for selected food";
  });
  }
  pageContent = {
  header : {
  title: '',
  body: ''
  }
  };
  
   public delete(newFood: inventory): void {
  this.foodServiceService.deleteFood(newFood._id);
  window.location.href ='';
  }
  
  public update(newFood: inventory): void {
  this.foodServiceService.updateFood(newFood._id, newFood);
  window.location.href ='';
  }
  

}
