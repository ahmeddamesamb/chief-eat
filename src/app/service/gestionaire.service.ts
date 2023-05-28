import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IClient} from "../model/client";
import {IGestionaire} from "../model/gestionaire";

@Injectable({
  providedIn: 'root'
})
export class GestionaireService {

  url="http://127.0.0.1:8090/api/gestionaire";

  constructor(private http:HttpClient) { }
  getGestionaire():Observable<IGestionaire[]> {
    return this.http.get<IGestionaire[]>(this.url);
  }

  detailgetGestionaire(id:number):Observable<IGestionaire> {
    return this.http.get<IGestionaire>(this.url+'/'+id);
  }
}
