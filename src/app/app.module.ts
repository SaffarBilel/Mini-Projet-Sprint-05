import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipesComponent } from './equipes/equipes.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { FormsModule } from '@angular/forms';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component' ;
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EquipesComponent,
    AddEquipeComponent,
    UpdateEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
