import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pilot } from '../Pilot';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {

  pilots = [];

  constructor(private http: Http) {
    const url = 'http://localhost:3111/api/pilot';
    this.pilots = [];
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      this.pilots = response.json();
      console.log(this.pilots);
    }, (response) => {
      console.log('failed');
} );
   }

  ngOnInit() {
  }

  DeletePilot(id: number) {
    console.log(id);
    const url = 'http://localhost:3111/api/pilot/' + id;
    console.log(url);
    this.http.delete(url)
    .subscribe( (response) => {
      console.log('in');
    }, (response) => {
      console.log('out');
    } );
}

}
