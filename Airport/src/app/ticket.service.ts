import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Ticket } from './Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  ticket: Ticket;

  constructor(private http: Http) { }

  getTicket(id): Observable<Ticket> {
    const url = 'http://localhost:3111/api/ticket/' + id;
    console.log(url);
    return this.http.get(url)
    .pipe(map(data => {
      const t = data.json();
      return t;
    }));
  }

  getTickets(): Observable<Ticket[]> {
    const url = 'http://localhost:3111/api/ticket/';
    return this.http.get(url)
    .pipe(map(data => {
      const ts = data.json();
      return ts;
    }));

  }

  DeleteTicket(id: number) {
    const url = 'http://localhost:3111/api/ticket/' + id;

    this.http.delete(url)
    .subscribe((res) => { });
  }

  CreateTicket(t) {
    const url = 'http://localhost:3111/api/ticket';
    console.log(url);
    this.http.post(url, t)
    .subscribe((res) => { });
  }

  UpdateTicket(id, t) {
    const url = 'http://localhost:3111/api/ticket/' + id;
    console.log(url);
    this.http.put(url, t)
    .subscribe((res) => { });
}
}
