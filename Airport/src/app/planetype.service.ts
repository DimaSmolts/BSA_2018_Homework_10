import { Injectable } from '@angular/core';
import { PlaneType } from './PlaneType';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PlanetypeService {

    pType: PlaneType;

  constructor(private http: Http) { }

  getPlaneType(id): Observable<PlaneType> {
    const url = 'http://localhost:3111/api/planetype/' + id;
    console.log(url);
    return this.http.get(url)
    .pipe(map(data => {
      const pt = data.json();
      return pt;
    }));
  }

  getPlaneTypes(): Observable<PlaneType[]> {
    const url = 'http://localhost:3111/api/planetype/';
    return this.http.get(url)
    .pipe(map(data => {
      const pts = data.json();
      return pts;
    }));
  }

  DeletelaneType(id: number) {
    const url = 'http://localhost:3111/api/planetype/' + id;

    this.http.delete(url)
    .subscribe((res) => { });
  }

  CreatePlaneType(pt) {
    const url = 'http://localhost:3111/api/planetype';
    console.log(url);
    this.http.post(url, pt)
    .subscribe((res) => { });
  }

  UpdatePlaneType(id, pt) {
    const url = 'http://localhost:3111/api/planetype' + id;
    console.log(url);
    this.http.post(url, pt)
    .subscribe((res) => { });
  }


}
