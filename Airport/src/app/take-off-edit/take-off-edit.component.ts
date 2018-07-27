import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { TakeoffService } from '../takeoff.service';

@Component({
  selector: 'app-take-off-edit',
  templateUrl: './take-off-edit.component.html',
  styleUrls: ['./take-off-edit.component.css']
})
export class TakeOffEditComponent implements OnInit {

  public TakeOffForm = this.fb.group({
    flightNum: [''],
    crewId: [''],
    planeId: [''],
    date: ['']
  });

  public create: boolean;

  constructor(private http: Http, private fb: FormBuilder, public route: ActivatedRoute,
    private location: Location, private service: TakeoffService) {
      if ( route.snapshot.paramMap.get('id') === '0' ) {
        this.create = true;
      } else {
        this.create = false;
      }
     }

  ngOnInit() {
  }

  onCreate() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.planeTypeForm.value);
    /*
    const url = 'http://localhost:3111/api/takeoff';
    console.log(url);
    this.http.post(url, this.TakeOffForm.value)
    .subscribe( (response) => {
      console.log('good');
    }, (response) => {
      console.log('failed');
    } );*/
    this.service.CreateTakeOff(this.TakeOffForm.value);
  }
  onUpdate() {
    // TODO: Use EventEmitter with form value
    /*
    const url = 'http://localhost:3111/api/takeoff/' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.put(url, this.TakeOffForm.value)
    .subscribe( (response) => {
      console.log('good');
    }, (response) => {
      console.log('failed');
    } );*/
    this.service.UpdateTakeOff(this.route.snapshot.paramMap.get('id'), this.TakeOffForm.value);
  }

}
