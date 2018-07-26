import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {PlaneType} from '../PlaneType';

@Component({
  selector: 'app-plane-type-entity',
  templateUrl: './plane-type-entity.component.html',
  styleUrls: ['./plane-type-entity.component.css']
})
export class PlaneTypeEntityComponent implements OnInit {

  planeType: PlaneType;

  constructor(private http: Http,
    private route: ActivatedRoute,
    private location: Location) {
      console.log('oooooooooo');
      const url = 'http://localhost:3111/api/planetype/' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      // debugger; // eslint-disable-line
      this.planeType = response.json();
      console.log(this.planeType);
    }, (response) => {
      console.log('failed');
    } );
     }

  ngOnInit() {
  }

}
