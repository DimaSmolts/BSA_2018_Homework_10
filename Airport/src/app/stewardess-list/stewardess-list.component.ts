import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Stewardess } from '../Stewardess';
import {StewService} from '../stew.service';

@Component({
  selector: 'app-stewardess-list',
  templateUrl: './stewardess-list.component.html',
  styleUrls: ['./stewardess-list.component.css']
})
export class StewardessListComponent implements OnInit {

  stewardesses: Stewardess[] = [];

  constructor(private http: Http, private service: StewService) {
    /*
    const url = 'http://localhost:3111/api/stewardess';
    this.stewardesses = [];
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      this.stewardesses = response.json();
      console.log(this.stewardesses);
    }, (response) => {
      console.log('failed');
    });*/
    }

  ngOnInit() {
    this.service.getStews().subscribe(data => this.stewardesses = data);
  }

  DeleteStewardess(id: number) {
    /*
    console.log(id);
    const url = 'http://localhost:3111/api/stewardess/' + id;
    console.log(url);
    this.http.delete(url)
    .subscribe( (response) => {
      console.log('in');
    }, (response) => {
      console.log('out');
    } );*/
    this.service.DeleteStew(id);
    }

}
