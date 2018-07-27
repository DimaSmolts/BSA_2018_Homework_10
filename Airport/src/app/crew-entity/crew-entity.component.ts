import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CrewService} from '../crew.service';
import { Crew } from '../Crew';

@Component({
  selector: 'app-crew-entity',
  templateUrl: './crew-entity.component.html',
  styleUrls: ['./crew-entity.component.css']
})
export class CrewEntityComponent implements OnInit {

  crew: Crew;

  constructor(private http: Http,
    private route: ActivatedRoute,
    private location: Location,
    private service: CrewService) {
      /*
    const url = 'http://localhost:3111/api/crew/' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      // debugger; // eslint-disable-line
      this.crew = response.json();
      console.log(this.crew);
    }, (response) => {
      console.log('failed');
    } );*/
}

  ngOnInit() {
    this.service.getCrew(this.route.snapshot.paramMap.get('id')).subscribe(data => this.crew = data);
  }

}
