import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { TakeOff } from './TakeOff';

@Injectable({
  providedIn: 'root'
})
export class TakeoffService {

  takeoff: TakeOff;

  constructor( private http: Http) { }

  getTakeOff(id): Observable<TakeOff> {
    const url = 'http://localhost:3111/api/takeoff/' + id;
    console.log(url);
    return this.http.get(url)
    .pipe(map(data => {
      const fl = data.json();
      return fl;
    }));
  }

  getTakeOffs(): Observable<TakeOff[]> {
    const url = 'http://localhost:3111/api/takeoff/';
    return this.http.get(url)
    .pipe(map(data => {
      const fls = data.json();
      return fls;
    }));

  }

  DeleteTakeOff(id: number) {
    const url = 'http://localhost:3111/api/takeoff/' + id;

    this.http.delete(url)
    .subscribe((res) => { });
  }

  CreateTakeOff(fl) {
    const url = 'http://localhost:3111/api/takeoff';
    console.log(url);
    this.http.post(url, fl)
    .subscribe((res) => { });
  }

  UpdateTakeOff(id, fl) {
    const url = 'http://localhost:3111/api/takeoff/' + id;
    console.log(url);
    this.http.put(url, fl)
    .subscribe((res) => { });
}


}
