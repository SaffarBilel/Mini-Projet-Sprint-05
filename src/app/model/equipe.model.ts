import { League } from "./league.model";

export class Equipe {
  idEquipe? : number;
  nomEquipe? : string;
  classementEquipe? : number;
   dateCreation? : Date ;
   league! : League ;
  }
