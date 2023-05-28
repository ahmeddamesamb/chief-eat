import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IClient} from "../model/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url="http://127.0.0.1:8090/api/client";

  constructor(private http:HttpClient) { }
  getClient():Observable<IClient[]> {
    return this.http.get<IClient[]>(this.url);
  }

  detailgetClient(id:number):Observable<any> {
    return this.http.get<IClient>(this.url+'/'+id);
  }
}
