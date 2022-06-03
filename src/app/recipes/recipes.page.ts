import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AZfilterComponent } from './azfilter/azfilter.component';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService, private modal: ModalController) { }

  getTheDataAZ(char) {
    this.recipesService.getRecipesAZ(char, res => {
      if (res) {
        this.recipes = this.recipesService.getRecipes();
      }
    });
  }

  ngOnInit() {
    this.getTheDataAZ('a');
  }

  openFilterModal() {
    this.modal.create({
      component: AZfilterComponent,
      animated: true,
      showBackdrop: true,
    })
      .then(model => {
        model.present();
        return model.onDidDismiss();
      })
      .then(result => {
        console.log(result);
        if (result.data) {
          this.getTheDataAZ(result.data);
        }
      });
  }

}
