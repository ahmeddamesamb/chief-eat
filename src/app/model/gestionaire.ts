import {IClient} from "./client";

export interface IGestionaire {
  id?: number,
  email?: string,
  prenom?: string,
  nom?: string,
  telephone?: string,
  adresse?: string,
  commandes?: [
    string
  ]
}

export class Gestionaire implements IGestionaire {
  constructor(public adresse: string,
              public commandes: [string],
              public email: string,
              public id: number,
              public nom: string,
              public prenom: string,
              public telephone: string
  ) {

  }
}
