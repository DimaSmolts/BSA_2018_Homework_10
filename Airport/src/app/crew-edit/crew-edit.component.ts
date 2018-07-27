import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { FormArray } from '@angular/forms';
import { Crew } from '../Crew';
import {CrewService} from '../crew.service';

@Component({
  selector: 'app-crew-edit',
  templateUrl: './crew-edit.component.html',
  styleUrls: ['./crew-edit.component.css']
})
export class CrewEditComponent implements OnInit {

  public CrewForm = this.fb.group({
    pilotId: [''],
    stewardessIds: this.fb.array([this.fb.control('')])
  });

  get stewardessIds() {
    return this.CrewForm.get('stewardessIds') as FormArray;
  }
  public create: boolean;

  addStew() {
    this.stewardessIds.push(this.fb.control(''));
  }

  deleteStew() {
    this.stewardessIds.removeAt(this.stewardessIds.length - 1);
  }

  constructor(private http: Http, private fb: FormBuilder, public route: ActivatedRoute,
    private location: Location, private service: CrewService) {
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
    const url = 'http://localhost:3111/api/crew';
    console.log('*****************************');
    const crew: Crew = this.CrewForm.value;
    console.log(crew);
    console.log('*****************************');
    this.http.post(url, this.CrewForm.value)
    .subscribe( (response) => {
      console.log('good');
    }, (response) => {
      console.log('failed');
    } );*/
    this.service.CreateCrew(this.CrewForm.value);
  }
  onUpdate() {
    // TODO: Use EventEmitter with form value
    /*
    const url = 'http://localhost:3111/api/crew/' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.put(url, this.CrewForm.value)
    .subscribe( (response) => {
      console.log('good');
    }, (response) => {
      console.log('failed');
    } );*/
    this.service.UpdateCrew(this.route.snapshot.paramMap.get('id'), this.CrewForm.value);
  }
}
