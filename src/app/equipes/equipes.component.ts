import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',

})
export class EquipesComponent implements OnInit {

 equipes?: Equipe[];


constructor(private equipeService : EquipeService){
    //this.equipes=[];
}


    ngOnInit(): void {

      this.chargerEquipes();

    }

            chargerEquipes(){
              this.equipeService.listeEquipe().subscribe(prods => {
                console.log(prods);
                this.equipes = prods;
                });
            }

            supprimerEquipe(p: Equipe)
            {
            let conf = confirm("Etes-vous sûr ?");
            if (conf)
            this.equipeService.supprimerEquipe(p.idEquipe!).subscribe(() => {
            console.log("Equipe  supprimé");
           this.chargerEquipes();
            });
            }












    }























