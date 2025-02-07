import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'history-sync';
  name: string = '';

  parentData = 'Data from parent';
  childData: string = '';

}
