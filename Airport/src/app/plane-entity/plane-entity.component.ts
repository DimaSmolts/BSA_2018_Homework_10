import { Component, OnInit } from '@angular/core';
import { Plane } from '../Plane';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-plane-entity',
  templateUrl: './plane-entity.component.html',
  styleUrls: ['./plane-entity.component.css']
})
export class PlaneEntityComponent implements OnInit {

  plane: Plane;

  constructor(private http: Http,
    private route: ActivatedRoute,
    private location: Location) {
    const url = 'http://localhost:3111/api/plane/' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      // debugger; // eslint-disable-line
      this.plane = response.json();
      console.log(this.plane);
    }, (response) => {
      console.log('failed');
    } );
}

  ngOnInit() {
  }

}
