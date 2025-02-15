import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-event-page',
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.css']
})
export class NewEventPageComponent implements OnInit {
  eventForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z\\sáéíóúâêôç]{3,50}')]],
      year: ['', [Validators.required, Validators.pattern('-?\\d{4}')]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[A-Za-z0-9\\sáéíóúâêôç]+')]]
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const eventFormData = this.eventForm.value;
      localStorage.setItem('eventFormData', JSON.stringify(eventFormData));
      alert('Event saved successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
