import { Component, OnInit } from '@angular/core';
import {Flight} from '../flight';
import {Http} from '@angular/http';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights = [
    // new Flight(1, 'Kyiv', new Date(1998, 5, 28), 'Vinnytsia', new Date(1998, 5, 28) ),
    // new Flight(2, 'London', new Date(1998, 6, 28), 'Vinnytsia', new Date(1998, 6, 28) ),
    // new Flight(3, 'Madrid', new Date(1998, 6, 28), 'Vinnytsia', new Date(1998, 6, 28) )
  ];

  constructor(private http: Http) {
    const url = 'http://localhost:3111/api/flight';
    this.flights = [];
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      // debugger; // eslint-disable-line
      this.flights = response.json();
      console.log(this.flights);
    }, (response) => {
      console.log('failed');
    } );
  }

  ngOnInit() { }

  getFlightList() {
     // return this.http.get(url)
     // .pipe(map(data => {
      //  const list = data['list'];
      //  return list.map(function(flight: any) {
     //     return {
     //       FlightNum : flight.FlightNum,
     //       DepaturePlace : flight.DepaturePlace,
     //       DepartureTime : flight.DepartureTime,
     //       ArrivalPlace : flight.ArrivalPlace,
     //       ArrivalTime : flight.ArrivalTime
     //     };
     //   });
     // }));
  }

}
