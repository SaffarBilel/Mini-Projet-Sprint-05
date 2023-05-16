import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from '../services/equipe.service';
import { Equipe } from '../model/equipe.model';
import { League} from '../model/league.model';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
})
export class UpdateJeuComponent implements OnInit {
  currentEquipe = new Equipe();
  leagues! : League[];
  updatedEntId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.equipeService.listeLeague().
         subscribe((cats: { _embedded: { entreprises: League[]; }; }) => {this.leagues = cats._embedded.leagues;
          console.log(cats);
});
this.equipeService.consulterEquipe(this.activatedRoute.snapshot.params['id']).
subscribe( prod =>{ this.currentEquipe = prod;
this.updatedEntId =this.currentEquipe.league.idLea;
} ) ;

  }
  updateJeu()
{ this.currentEquipe.league= this.leagues.find(cat => cat.idLea == this.updatedLeaId)!;
  this.equipeService.updateEquipe(this.currentEquipe).subscribe(() => {
  this.router.navigate(['jeux']); }
  );

}

}
