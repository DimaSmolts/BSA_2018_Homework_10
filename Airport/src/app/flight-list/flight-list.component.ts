import { Component, OnInit } from '@angular/core';
import {Flight} from '../flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights = [
    new Flight(1, 'Kyiv', new Date(1998, 5, 28), 'Vinnytsia', new Date(1998, 5, 28) ),
    new Flight(2, 'London', new Date(1998, 6, 28), 'Vinnytsia', new Date(1998, 6, 28) ),
    new Flight(3, 'Madrid', new Date(1998, 6, 28), 'Vinnytsia', new Date(1998, 6, 28) )
  ];

  constructor() { }

  ngOnInit() {
  }

}
