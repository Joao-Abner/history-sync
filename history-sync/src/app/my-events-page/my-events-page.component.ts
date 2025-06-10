import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-events-page',
  templateUrl: './my-events-page.component.html',
  styleUrl: './my-events-page.component.css'
})
export class MyEventsPageComponent {
  events: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/my-events').subscribe(data => {
      this.events = data;
    });
  }
}
