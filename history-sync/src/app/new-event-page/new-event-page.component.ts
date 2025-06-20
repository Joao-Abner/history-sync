import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyEventService } from '../services/my-events.service';

@Component({
  selector: 'app-new-event-page',
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.css']
})
export class NewEventPageComponent implements OnInit {
  eventForm!: FormGroup;

  constructor(private fb: FormBuilder, private MyEventService: MyEventService) { }

  ngOnInit() {
    this.eventForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      year: ['', [Validators.required, Validators.pattern(/^(-?\d{4})$/)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit() {
    if (this.eventForm.valid) {
      try {
        await this.MyEventService.addEvent(this.eventForm.value);
        alert('Event added successfully!');
        this.eventForm.reset();
      } catch (err) {
        alert('Error adding event!');
        console.error(err);
      }
    }
  }
}
