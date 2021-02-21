import { Component, OnInit } from '@angular/core';
import { DishService } from '../service/dish.service';
import { JsonplaceholderService } from '../service/jsonplaceholder.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dishes: any;
  selectedDish: any;
  posts: any;

  constructor(
    private dishService: DishService,
    private jsonplaceholder: JsonplaceholderService
  ) {}

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: any) {
    this.selectedDish = dish;
  }

  getPosts() {
    this.jsonplaceholder.getPosts().subscribe((data) => (this.posts = data));
  }

  hidePosts() {
    this.posts = null;
  }
}
