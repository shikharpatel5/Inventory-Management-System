import { Component, OnInit, Input } from '@angular/core';
import { inventory } from '../inventory';
import { InventoryServiceService } from '../inventory-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [InventoryServiceService]
})
export class CreateComponent implements OnInit {

 public newFood: inventory = {
 upc: '',
 name: '',
 quantity: '',
 _id : '',
 price: '',
description: '',
category: ''

 };

  constructor( private foodServiceService: InventoryServiceService) { }

  ngOnInit(): void {
  }
  
  public createNewFood(newFood: inventory): void {
  this.foodServiceService.createFood(newFood);
  window.location.href = '';
  }

}
