import { Component } from '@angular/core';
import {ClientService} from "../service/client.service";
import {Gestionaire, IGestionaire} from "../model/gestionaire";
import {GestionaireService} from "../service/gestionaire.service";
import {IClient} from "../model/client";

@Component({
  selector: 'app-gestionaire',
  templateUrl: './gestionaire.component.html',
  styleUrls: ['./gestionaire.component.css']
})
export class GestionaireComponent {
  gestionaires!:IGestionaire[]

  constructor(private gestionaire: GestionaireService) { }

  ngOnInit(): void {
    this.gestionaire.getGestionaire().subscribe(data=>{
      this.gestionaires=data
      console.log(this.gestionaires)
    })
  }

}
