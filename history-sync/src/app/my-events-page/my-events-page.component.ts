import { Component, OnInit } from '@angular/core';
import { MyEventService, Event } from '../services/my-events.service';

@Component({
  selector: 'app-my-events-page',
  templateUrl: './my-events-page.component.html',
  styleUrls: ['./my-events-page.component.css']
})
export class MyEventsPageComponent implements OnInit {
  events: Event[] = [];

  constructor(private myEventService: MyEventService) { }

  async ngOnInit() {
    try {
      this.events = await this.myEventService.getEvents();
    } catch (err) {
      console.error(err);
    }
  }
}
