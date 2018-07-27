import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Plane} from '../Plane';
import {PlaneService} from '../plane.service';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css']
})
export class PlaneListComponent implements OnInit {

  planes: Plane[] = [];

  constructor(private http: Http, private service: PlaneService) {
    /*
    const url = 'http://localhost:3111/api/plane';
    this.planes = [];
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      this.planes = response.json();
      console.log(this.planes);
    }, (response) => {
      console.log('failed');
    } );*/
  }

  ngOnInit() {
    this.service.getPlanes()
    .subscribe(data => this.planes = data);
  }

  DeletePlane(id: number) {
    /*
    console.log(id);
    const url = 'http://localhost:3111/api/plane/' + id;
    console.log(url);
    this.http.delete(url)
    .subscribe( (response) => {
      console.log('in');
    }, (response) => {
      console.log('out');
    } );*/
    this.service.DeletePlane(id);
  }

}
