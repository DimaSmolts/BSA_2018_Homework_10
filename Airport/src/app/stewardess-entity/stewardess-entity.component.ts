import { Component, OnInit } from '@angular/core';
import { Stewardess } from '../Stewardess';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stewardess-entity',
  templateUrl: './stewardess-entity.component.html',
  styleUrls: ['./stewardess-entity.component.css']
})
export class StewardessEntityComponent implements OnInit {

  stew: Stewardess;

  constructor(private http: Http,
    private route: ActivatedRoute,
    private location: Location) {
    const url = 'http://localhost:3111/api/stewardess/' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      // debugger; // eslint-disable-line
      this.stew = response.json();
      console.log(this.stew);
    }, (response) => {
      console.log('failed');
    } );
}

  ngOnInit() {
  }

}
