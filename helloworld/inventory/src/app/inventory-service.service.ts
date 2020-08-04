import { Injectable } from '@angular/core';
import { inventory } from './inventory';
import {  HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
providedIn: "root"
})
export class InventoryServiceService {

private foodsUrl = 'http://localhost:3000/api/food';
  constructor(private http: HttpClient) { }
  
  getFoods() : Promise<void | inventory[]>{
  return this.http
  .get<inventory[]>(this.foodsUrl)
  .toPromise()
  .then(response => { console.log(response);
  return response as inventory[];
  })
  .catch(this.handleError);
  }
  
  private handleError (error: any){
  console.log("error");
  }
  
  getSingleFood(foodId: String): Promise<void | inventory> {
  return this.http.get(this.foodsUrl + '/' + foodId)
  .toPromise()
  .then(response => response as inventory)
  .catch(this.handleError);
  }
  
  createFood(newFood: inventory): Promise<void | inventory>{
  return this.http.post(this.foodsUrl, newFood)
  .toPromise()
  .then(response => response as inventory)
  .catch(this.handleError);
  }
  
   deleteFood(foodId: String): Promise<void | inventory>{
  return this.http.delete(this.foodsUrl+'/'+foodId)
  .toPromise()
  .then(response => response as inventory)
  .catch(this.handleError);
  } 
  
   updateFood(foodId: String,newFood: inventory): Promise<void | inventory>{
  return this.http.put(this.foodsUrl+'/'+foodId, newFood)
  .toPromise()
  .then(response => response as inventory)
  .catch(this.handleError);
  } 
  
  
}
