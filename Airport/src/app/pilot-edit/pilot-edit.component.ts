import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';

@Component({
  selector: 'app-pilot-edit',
  templateUrl: './pilot-edit.component.html',
  styleUrls: ['./pilot-edit.component.css']
})
export class PilotEditComponent implements OnInit {

  public PilotForm = this.fb.group({
    name: [''],
    surname: [''],
    birth: [''],
    experience: ['00:00:00']
  });

  public create: boolean;

  constructor(private http: Http, private fb: FormBuilder, public route: ActivatedRoute,
    private location: Location) {
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
    const url = 'http://localhost:3111/api/pilot';
    console.log(url);
    this.http.post(url, this.PilotForm.value)
    .subscribe( (response) => {
      console.log('good');
    }, (response) => {
      console.log('failed');
    } );
  }
  onUpdate() {
    // TODO: Use EventEmitter with form value
    const url = 'http://localhost:3111/api/pilot/' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.put(url, this.PilotForm.value)
    .subscribe( (response) => {
      console.log('good');
    }, (response) => {
      console.log('failed');
    } );
}

}
