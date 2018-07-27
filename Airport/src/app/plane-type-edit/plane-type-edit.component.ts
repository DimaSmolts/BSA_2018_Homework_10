import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { PlanetypeService } from '../planetype.service';


@Component({
  selector: 'app-plane-type-edit',
  templateUrl: './plane-type-edit.component.html',
  styleUrls: ['./plane-type-edit.component.css']
})
export class PlaneTypeEditComponent implements OnInit {

  public planeTypeForm = this.fb.group({
    model: [''],
    places: [''],
    carryCapacity: ['']
  });

  public create: boolean;

  constructor(private http: Http, private fb: FormBuilder, public route: ActivatedRoute,
    private location: Location, private service: PlanetypeService) {
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
    const url = 'http://localhost:3111/api/planetype';
    console.log(url);
    this.http.post(url, this.planeTypeForm.value)
    .subscribe( (response) => {
      console.log('good');
    }, (response) => {
      console.log('failed');
    } );*/
    this.service.CreatePlaneType(this.planeTypeForm.value);
  }

  onUpdate() {
    // TODO: Use EventEmitter with form value
    // TODO: Use EventEmitter with form value
    // console.warn(this.planeTypeForm.value);
    /*
    const url = 'http://localhost:3111/api/planetype' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.put(url, this.planeTypeForm.value)
    .subscribe( (response) => {
      console.log('good');
    }, (response) => {
      console.log('failed');
    } );*/
    this.service.UpdatePlaneType(this.route.snapshot.paramMap.get('id'), this.planeTypeForm.value);
  }
}
