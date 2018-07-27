import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Stewardess } from './Stewardess';

@Injectable({
  providedIn: 'root'
})
export class StewService {

  stew: Stewardess;

  constructor(private http: Http) { }

  getStew(id): Observable<Stewardess> {
    const url = 'http://localhost:3111/api/stewardess/' + id;
    console.log(url);
    return this.http.get(url)
    .pipe(map(data => {
      const st = data.json();
      return st;
    }));
  }

  getStews(): Observable<Stewardess[]> {
    const url = 'http://localhost:3111/api/stewardess/';
    return this.http.get(url)
    .pipe(map(data => {
      const sts = data.json();
      return sts;
    }));

  }

  DeleteStew(id: number) {
    const url = 'http://localhost:3111/api/stewardess/' + id;

    this.http.delete(url)
    .subscribe((res) => { });
  }

  CreateStew(s) {
    const url = 'http://localhost:3111/api/stewardess';
    console.log(url);
    this.http.post(url, s)
    .subscribe((res) => { });
  }

  UpdateStew(id, s) {
    const url = 'http://localhost:3111/api/stewardess/' + id;
    console.log(url);
    this.http.put(url, s)
    .subscribe((res) => { });
}

}
