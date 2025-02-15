import { Component, OnInit } from '@angular/core';
import { MyHistoricalEventsService } from './my-historical-events.service';

@Component({
  selector: 'app-my-historical-events-page',
  templateUrl: './my-historical-events-page.component.html',
  styleUrls: ['./my-historical-events-page.component.css']
})
export class MyHistoricalEventsPageComponent implements OnInit {
  events: any[] = [];

  constructor(private myHistoricalEventsService: MyHistoricalEventsService) { }

  ngOnInit(): void {
    this.loadHistoricalEvents();
  }

  loadHistoricalEvents(): void {
    this.myHistoricalEventsService.getEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Erro ao carregar eventos:', error);
      }
    );
  }

  deleteEvent(id: number): void {
    this.myHistoricalEventsService.deleteEvent(id).subscribe(
      () => {
        this.events = this.events.filter(event => event.id !== id);
        console.log('Item deletado com sucesso.');
      },
      (error) => {
        console.error('Erro ao deletar item:', error);
      }
    );
  }
}
