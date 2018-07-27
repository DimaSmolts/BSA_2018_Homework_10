import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Pilot} from '../Pilot';
import {PilotService} from '../pilot.service';

@Component({
  selector: 'app-pilot-entity',
  templateUrl: './pilot-entity.component.html',
  styleUrls: ['./pilot-entity.component.css']
})
export class PilotEntityComponent implements OnInit {

  pilot: Pilot;

  constructor(private http: Http,
    private route: ActivatedRoute,
    private location: Location,
  private service: PilotService) {
      /*
    const url = 'http://localhost:3111/api/pilot/' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      // debugger; // eslint-disable-line
      this.pilot = response.json();
      console.log(this.pilot);
    }, (response) => {
      console.log('failed');
    } );*/
}

  ngOnInit() {
    this.service.getPilot(this.route.snapshot.paramMap.get('id'))
    .subscribe(data => this.pilot = data);
  }

}
