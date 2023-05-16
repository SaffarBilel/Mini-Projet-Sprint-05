import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipesComponent } from './equipes/equipes.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';


const routes: Routes = [
{ path : "equipes", component : EquipesComponent },
{path: "updateEquipe/:id", component: UpdateEquipeComponent},
{ path : "add-equipe", component : AddEquipeComponent },
{ path: "", redirectTo: "equipes", pathMatch: "full" } ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
