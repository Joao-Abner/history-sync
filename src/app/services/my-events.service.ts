import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

export interface Event {
  id?: number;
  title: string;
  year: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class MyEventService {
  private apiUrl = 'http://localhost:3000/my-events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }
}
