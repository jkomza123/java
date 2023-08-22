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
  public getAll(): Observable<Klausimai[]>{
    return this.http.get<Klausimai[]>(`${this.apiServerUrl}/klausimai/all`)
  }
  
}
