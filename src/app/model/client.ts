export interface IClient {
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

export class Client implements IClient {
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
