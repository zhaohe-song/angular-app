import { Injectable } from '@angular/core';
import { dishes } from '../shared/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes() {
    return dishes;
  }

  getDish(id: String) {
    return dishes.filter((dish) => dish.id === id)[0];
  }
}
