import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Pilot} from './Pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  pilot: Pilot;

  constructor(private http: Http) { }

  getPilot(id): Observable<Pilot> {
    const url = 'http://localhost:3111/api/pilot/' + id;
    console.log(url);
    return this.http.get(url)
    .pipe(map(data => {
      const p = data.json();
      return p;
    }));
  }

  getPilots(): Observable<Pilot[]> {
    const url = 'http://localhost:3111/api/pilot/';
    return this.http.get(url)
    .pipe(map(data => {
      const ps = data.json();
      return ps;
    }));
  }

  DeletePilot(id: number) {
    const url = 'http://localhost:3111/api/pilot/' + id;

    this.http.delete(url)
    .subscribe((res) => { });
  }

  CreatePilot(p) {
    const url = 'http://localhost:3111/api/pilot';
    console.log(url);
    this.http.post(url, p)
    .subscribe((res) => { });
  }

  UpdatePilot(id, p) {
    const url = 'http://localhost:3111/api/pilot/' + id;
    console.log(url);
    this.http.put(url, p)
    .subscribe((res) => { });
}


}
