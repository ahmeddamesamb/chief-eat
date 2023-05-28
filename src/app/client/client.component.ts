import {Component, OnInit} from '@angular/core';
import {IClient} from "../model/client";
import {ClientService} from "../service/client.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  clients!:IClient[]
  constructor(private client: ClientService) { }

  ngOnInit(): void {
    this.client.getClient().subscribe(data=>{
      this.clients=data
      console.log(this.clients)
    })
  }

}
