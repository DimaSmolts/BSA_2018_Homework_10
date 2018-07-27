import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Ticket } from '../Ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(private http: Http, private service: TicketService) {
    /*
    const url = 'http://localhost:3111/api/ticket';
    this.tickets = [];
    this.http.get(url)
    .subscribe( (response) => {
      console.log('good');
      this.tickets = response.json();
      console.log(this.tickets);
    }, (response) => {
      console.log('failed');
    } );*/
}

  ngOnInit() {
    this.service.getTickets().subscribe(data => this.tickets = data);
  }

  DeleteTicket(id: number) {
    /*
    console.log(id);
    const url = 'http://localhost:3111/api/ticket/' + id;
    console.log(url);
    this.http.delete(url)
    .subscribe( (response) => {
      console.log('in');
    }, (response) => {
      console.log('out');
    } );*/
    this.service.DeleteTicket(id);
}

}
