import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { League } from '../model/league.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',

})
export class AddEquipeComponent implements OnInit {


    newEquipe = new Equipe();
    message? :string;
    leagues! : League[];
    newIdLea! : number;
    newleague! : League;


  constructor(private equipeService : EquipeService,
          private router : Router){ }

  ngOnInit(): void{
    this.equipeService.listeLeagues().
    subscribe(cats => {this.leagues = cats;
    console.log(cats);

  });

  }




   addEquipe(){
    this.equipeService.ajouterEquipe(this.newEquipe)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['produits']);
    });
    }












}
