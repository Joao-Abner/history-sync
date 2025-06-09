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

  ngOnInit() {
    this.eventForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      year: ['', [Validators.required, Validators.pattern(/^(-?\d{4})$/)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const event = this.eventForm.value;
      // Recupera eventos já existentes do localStorage
      const existingEvents = JSON.parse(localStorage.getItem('existingEvents') || '[]');
      existingEvents.push(event);
      localStorage.setItem('existingEvents', JSON.stringify(existingEvents));
      console.log(this.eventForm.value);
      this.eventForm.reset();
      alert('Evento cadastrado com sucesso!');
    }
  }
}
