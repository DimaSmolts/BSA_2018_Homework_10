import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import {FlightService} from '../flight.service';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  public FlightForm = this.fb.group({
    deperturePlace: [''],
    departureTime: [''],
    arrivalPlace: [''],
    arrivalTime: ['']
  });

  public create: boolean;

  constructor(private http: Http, private fb: FormBuilder, public route: ActivatedRoute,
    private location: Location, private service: FlightService) {
      if ( route.snapshot.paramMap.get('id') === '0' ) {
        this.create = true;
      } else {
        this.create = false;
      }
     }

  ngOnInit() {
  }

  onCreate() {
    this.service.CreateFlight(this.FlightForm.value);
  }

  onUpdate() {
    this.service.UpdateFlight(this.route.snapshot.paramMap.get('id'), this.FlightForm.value);
  }
}
