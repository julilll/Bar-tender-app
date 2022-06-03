import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes;

  constructor(private httpClient: HttpClient) { }

  getRecipesAZ(char, clbck) {
    this.httpGet(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${char}`)
      .subscribe(data => {
        this.recipes = data;
        clbck(true);
      }, err => clbck(false));
  }

  getRecipes() {
    return this.recipes.drinks;
  }

  getRecipe(id) {
    return {...this.recipes.drinks.find(el =>el.idDrink === id)};
  }

  httpGet(request): Observable<Recipe> {
    return this.httpClient.get<Recipe>(request);
  }

}
