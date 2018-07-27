import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Crew } from '../Crew';
import {CrewService} from '../crew.service';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  crews: Crew[] = [];

  constructor(private http: Http, private service: CrewService) {
    /*
    const url = 'http://localhost:3111/api/crew';
    this.crews = [];
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      this.crews = response.json();
      console.log(this.crews);
    }, (response) => {
      console.log('failed');
    } );*/
  }

  ngOnInit() {
    this.service.getCrews().subscribe(data => this.crews = data);
  }

  DeleteCrew(id: number) {
    /*
    console.log(id);
    const url = 'http://localhost:3111/api/crew/' + id;
    console.log(url);
    this.http.delete(url)
    .subscribe( (response) => {
      console.log('in');
    }, (response) => {
      console.log('out');
    } );*/
    this.service.DeleteCrew(id);
  }


}
