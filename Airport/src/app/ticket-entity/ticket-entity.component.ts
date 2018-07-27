import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Ticket} from '../Ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-entity',
  templateUrl: './ticket-entity.component.html',
  styleUrls: ['./ticket-entity.component.css']
})
export class TicketEntityComponent implements OnInit {

  ticket: Ticket;

  constructor(private http: Http,
    private route: ActivatedRoute,
    private location: Location,
    private service: TicketService) {
      /*
    const url = 'http://localhost:3111/api/ticket/' + this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      // debugger; // eslint-disable-line
      this.ticket = response.json();
      console.log(this.ticket);
    }, (response) => {
      console.log('failed');
    } );*/
}

  ngOnInit() {
    this.service.getTicket(this.route.snapshot.paramMap.get('id')).subscribe(data => this.ticket = data);
  }

}
