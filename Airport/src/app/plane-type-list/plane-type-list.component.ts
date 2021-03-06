import { Component, OnInit } from '@angular/core';
import { PlaneType } from '../PlaneType';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlanetypeService } from '../planetype.service';

@Component({
  selector: 'app-plane-type-list',
  templateUrl: './plane-type-list.component.html',
  styleUrls: ['./plane-type-list.component.css']
})
export class PlaneTypeListComponent implements OnInit {

  planeTypes: PlaneType[] = [ ];

  constructor(private http: Http, private service: PlanetypeService) {
    /*
    const url = 'http://localhost:3111/api/planetype';
    this.planeTypes = [];
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      this.planeTypes = response.json();
      console.log(this.planeTypes);
    }, (response) => {
      console.log('failed');
    } );*/
}

  ngOnInit() {
    this.service.getPlaneTypes()
    .subscribe(data => this.planeTypes = data);
  }

  DeletePT(id: number) {
    /*
    console.log(id);
    const url = 'http://localhost:3111/api/planetype/' + id;
    console.log(url);
    this.http.delete(url)
    .subscribe( (response) => {
      console.log('in');
    }, (response) => {
      console.log('out');
    } );*/
    this.service.DeletelaneType(id);

  }

}
