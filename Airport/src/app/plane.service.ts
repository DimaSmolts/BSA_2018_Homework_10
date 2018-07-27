import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Plane } from './Plane';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  plane: Plane;

  constructor(private http: Http) { }

  getPlane(id): Observable<Plane> {
    const url = 'http://localhost:3111/api/plane/' + id;
    console.log(url);
    return this.http.get(url)
    .pipe(map(data => {
      const p = data.json();
      return p;
    }));
  }

  getPlanes(): Observable<Plane[]> {
    const url = 'http://localhost:3111/api/plane/';
    return this.http.get(url)
    .pipe(map(data => {
      const p = data.json();
      return p;
    }));

  }

  DeletePlane(id: number) {
    const url = 'http://localhost:3111/api/plane/' + id;

    this.http.delete(url)
    .subscribe((res) => { });
  }

  CreatePlane(p) {
    const url = 'http://localhost:3111/api/plane';
    console.log(url);
    this.http.post(url, p)
    .subscribe((res) => { });
  }

  UpdatePlane(id, p) {
    const url = 'http://localhost:3111/api/plane/' + id;
    console.log(url);
    this.http.put(url, p)
    .subscribe((res) => { });
}


}
