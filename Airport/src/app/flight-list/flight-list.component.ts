import { Component, OnInit } from '@angular/core';
import {Flight} from '../flight';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[] = [ ];

  constructor(private http: Http) {
    const url = 'http://localhost:3111/api/flight';
    this.flights = [];
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      this.flights = response.json();
      console.log(this.flights);
    }, (response) => {
      console.log('failed');
    } );
  }

  ngOnInit() { }

  DeleteFlight(id: number) {
    console.log(id);
    const url = 'http://localhost:3111/api/flight/' + id;
    console.log(url);
    this.http.delete(url)
    .subscribe( (response) => {
      console.log('in');
    }, (response) => {
      console.log('out');
    } );
  }
}
