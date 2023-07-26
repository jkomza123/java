import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

import { Klausimai } from './klausimai';
import { Atsakymai } from './atsakymai';

@Injectable({
  providedIn: 'root'
})
export class KlausimaiService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getKlausimai(klausimasid: number): Observable<Klausimai>{
    return this.http.get<Klausimai>(`${this.apiServerUrl}/klausimai/${klausimasid}`)
  }
  public addKlausimai(klausimai: Klausimai): Observable<Klausimai>{
    return this.http.put<Klausimai>(`${this.apiServerUrl}/klausimai/add`, klausimai)
  }
  public deleteKlausimai(klausimasid: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/klausimai/delete/$(klausimasid)`)
  }
  public getAll(): Observable<Klausimai[]>{
    return this.http.get<Klausimai[]>(`${this.apiServerUrl}/klausimai/all`)
  }
  public postAts(atsakymai: Atsakymai): Observable<Atsakymai>{
    return this.http.post<Atsakymai>(`${this.apiServerUrl}/atsakymai/addatsakymas`, atsakymai,{
        headers: new HttpHeaders({
            'Content-Type':'application/json'
        })
    });
  }
}
