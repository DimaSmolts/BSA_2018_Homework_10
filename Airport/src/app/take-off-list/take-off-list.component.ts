import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TakeOff } from '../TakeOff';
import { TakeoffService } from '../takeoff.service';

@Component({
  selector: 'app-take-off-list',
  templateUrl: './take-off-list.component.html',
  styleUrls: ['./take-off-list.component.css']
})
export class TakeOffListComponent implements OnInit {

  takeoffs: TakeOff[] = [];

  constructor(private http: Http, private service: TakeoffService) {
    /*
    const url = 'http://localhost:3111/api/takeoff';
    this.takeoffs = [];
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      this.takeoffs = response.json();
      console.log(this.takeoffs);
    }, (response) => {
      console.log('failed');
    } );*/
  }

  ngOnInit() {
    this.service.getTakeOffs().subscribe(data => this.takeoffs = data);
  }

  DeleteTakeOff(id: number) {
    /*
    console.log(id);
    const url = 'http://localhost:3111/api/takeoff/' + id;
    console.log(url);
    this.http.delete(url)
    .subscribe( (response) => {
      console.log('in');
    }, (response) => {
      console.log('out');
    } );*/
    this.service.DeleteTakeOff(id);
  }

}
