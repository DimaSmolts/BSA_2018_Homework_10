import { Injectable } from '@angular/core';
import { Flight } from './flight';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flight: Flight;

  constructor(private http: Http) { }

  getFlight(id): Observable<Flight> {
    const url = 'http://localhost:3111/api/flight/' + id;
    console.log(url);
    return this.http.get(url)
    .pipe(map(data => {
      const fl = data.json();
      return fl;
    }));
  }

  getFlights(): Observable<Flight[]> {
    const url = 'http://localhost:3111/api/flight/';
    return this.http.get(url)
    .pipe(map(data => {
      const fls = data.json();
      return fls;
    }));

  }

  DeleteFlight(id: number) {
    const url = 'http://localhost:3111/api/flight/' + id;

    this.http.delete(url)
    .subscribe((res) => { });
  }

  CreateFlight(fl) {
    const url = 'http://localhost:3111/api/flight';
    console.log(url);
    this.http.post(url, fl)
    .subscribe((res) => { });
  }

  UpdateFlight(id, fl) {
    const url = 'http://localhost:3111/api/flight/' + id;
    console.log(url);
    this.http.put(url, fl)
    .subscribe((res) => { });
  }

}
