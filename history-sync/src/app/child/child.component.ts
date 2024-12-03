import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() parentData: string = '';
  @Output() childEvent = new EventEmitter<string>();

  sendData() {
    this.childEvent.emit('Data from child');
  }
}
