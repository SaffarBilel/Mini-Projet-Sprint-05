import { Injectable } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { League } from '../model/league.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  updateEquipe(currentEquipe: Equipe) {
    throw new Error('Method not implemented.');
  }

  apiURL: string = 'http://localhost:8080/equipes/api';

  equipes! : Equipe[];
  //leagues! : League[];

  constructor( private http : HttpClient) {


  /*  this.equipes=
      [{idEquipe : 1, nomEquipe : "Barcelone", classementEquipe : 3, dateCreation : new Date("01/14/2011"),
          league :{idLea : 1, nomLea : "Premier League",nombreEquipes : 20    } },

      {idEquipe : 2, nomEquipe : "Real Madrid", classementEquipe : 1, dateCreation : new Date("02/16/1899"),
          league :{idLea : 2, nomLea : "Serie A", nombreEquipes : 20   }},

      {idEquipe : 3, nomEquipe : "Inter", classementEquipe : 4, dateCreation : new Date("01/20/1890"),
        league :  {idLea : 3, nomLea : "Ligue 1", nombreEquipes : 25   }},
    ]; */

  }


            listeEquipe(): Observable<Equipe[]>{
            return this.http.get<Equipe[]> (this.apiURL);
            }


             ajouterEquipe( prod: Equipe):Observable<Equipe>{
              return this.http.post<Equipe>(this.apiURL,prod,httpOptions);
              }


              supprimerEquipe(id : number) {
                const url = `${this.apiURL}/${id}`;
                return this.http.delete(url, httpOptions);
                }

                consulterEquipe(id: number): Observable<Equipe> {
                  const url = `${this.apiURL}/${id}`;
                  return this.http.get<Equipe>(url);
                  }

            updateProduit(prod :Equipe) : Observable<Equipe>
               {
                return this.http.put<Equipe>(this.apiURL, prod, httpOptions);
               }


  trierEquipes() {
    this.equipes = this.equipes.sort((n1, n2) => {
      if (n1.idEquipe! > n2.idEquipe!) {
        return 1;
      }
      if (n1.idEquipe! < n2.idEquipe!) {
        return -1;
      }
      return 0;
    });
  }


  listeLeagues():Observable<League[]>{
    return this.http.get<League[]>(this.apiURL+"/cat");
    }







    /*
    consulterLeagues(id:number): League{
    return this.leagues.find(cat => cat.idLea == id)!;
    }*/








  }

