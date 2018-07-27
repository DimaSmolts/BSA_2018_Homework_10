import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Crew} from './Crew';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  crew: Crew;

  constructor(private http: Http) { }

  getCrew(id): Observable<Crew> {
    const url = 'http://localhost:3111/api/crew/' + id;
    console.log(url);
    return this.http.get(url)
    .pipe(map(data => {
      const c = data.json();
      return c;
    }));
  }

  getCrews(): Observable<Crew[]> {
    const url = 'http://localhost:3111/api/crew/';
    return this.http.get(url)
    .pipe(map(data => {
      const c = data.json();
      return c;
    }));

  }

  DeleteCrew(id: number) {
    const url = 'http://localhost:3111/api/crew/' + id;

    this.http.delete(url)
    .subscribe((res) => { });
  }

  CreateCrew(c) {
    const url = 'http://localhost:3111/api/crew';
    console.log(url);
    this.http.post(url, c)
    .subscribe((res) => { });
  }

  UpdateCrew(id, c) {
    const url = 'http://localhost:3111/api/crew/' + id;
    console.log(url);
    this.http.put(url, c)
    .subscribe((res) => { });
}
}
