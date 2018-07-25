import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {TakeOff} from '../TakeOff';

@Component({
  selector: 'app-take-off-entity',
  templateUrl: './take-off-entity.component.html',
  styleUrls: ['./take-off-entity.component.css']
})
export class TakeOffEntityComponent implements OnInit {

  takeoff: TakeOff;

  constructor(private http: Http,
    private route: ActivatedRoute,
    private location: Location) {
    const url = 'http://localhost:3111/api/takeoff/' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      // debugger; // eslint-disable-line
      this.takeoff = response.json();
      console.log(this.takeoff);
    }, (response) => {
      console.log('failed');
    } );
}

  ngOnInit() {
  }

}
