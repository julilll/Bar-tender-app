import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  ingredients;

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipe = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipe);
      const fields = Object.entries(this.loadedRecipe);
      let ingrs = fields.filter(el => el[0].includes('strIngredient') && el[1]);
      ingrs = ingrs.map(el => el[1]);
      let measures = fields.filter(el => el[0].includes('strMeasure') && el[1]);
      measures = measures.map(el => el[1]);
      this.ingredients = ingrs.map((item, index) => ({
        ingredient: item,
        measure: measures[index]
      }));
    });
  }

}
