import { Component, OnInit } from '@angular/core';
import { MyEventService } from '../services/my-events.service';

@Component({
  selector: 'app-my-events-page',
  templateUrl: './my-events-page.component.html',
  styleUrls: ['./my-events-page.component.css']
})
export class MyEventsPageComponent implements OnInit {
  events: any[] = [];

  constructor(private MyEventService: MyEventService) { }

  ngOnInit() {
    this.MyEventService.getEvents().subscribe({
      next: (data) => this.events = data,
      error: (err) => console.error(err)
    });
  }
}
