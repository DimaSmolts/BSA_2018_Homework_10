import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Crew } from '../Crew';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  crews: Crew[] = [];

  constructor(private http: Http) {
    const url = 'http://localhost:3111/api/crew';
    this.crews = [];
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      this.crews = response.json();
      console.log(this.crews);
    }, (response) => {
      console.log('failed');
    } );
  }

  ngOnInit() {
  }

  DeleteCrew(id: number) {
    console.log(id);
    const url = 'http://localhost:3111/api/crew/' + id;
    console.log(url);
    this.http.delete(url)
    .subscribe( (response) => {
      console.log('in');
    }, (response) => {
      console.log('out');
    } );
  }


}
