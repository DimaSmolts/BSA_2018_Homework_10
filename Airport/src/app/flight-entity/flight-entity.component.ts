import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FlightService} from '../flight.service';


@Component({
  selector: 'app-flight-entity',
  templateUrl: './flight-entity.component.html',
  styleUrls: ['./flight-entity.component.css']
})
export class FlightEntityComponent implements OnInit {

  flight: Flight;

  constructor(private http: Http,
    private route: ActivatedRoute,
    private location: Location,
    private service: FlightService) {
      /*
    const url = 'http://localhost:3111/api/flight/' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      // debugger; // eslint-disable-line
      this.flight = response.json();
      console.log(this.flight);
    }, (response) => {
      console.log('failed');
    } );*/
   }

  ngOnInit() {
    const num = this.route.snapshot.paramMap.get('id');

    this.service.getFlight(num)
    .subscribe(data => this.flight = data);
  }
}
