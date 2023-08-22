import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

import { Atsakymai } from './atsakymai';

@Injectable({
  providedIn: 'root'
})
export class AtsakymaiService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  public postAts(atsakymai: Atsakymai): Observable<Atsakymai>{
    return this.http.post<Atsakymai>(`${this.apiServerUrl}/atsakymai/addatsakymas`, atsakymai,{
        headers: new HttpHeaders({
            'Content-Type':'application/json'
        })
    });
  }
  
}