import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-event-page',
  templateUrl: './search-event-page.component.html',
  styleUrls: ['./search-event-page.component.css']
})
export class SearchEventPageComponent implements OnInit {
  searchEventForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchEventForm = this.fb.group({
      eventName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.searchEventForm.valid) {
      // Handle form submission
      console.log('Form Submitted', this.searchEventForm.value);
    }
  }
}
