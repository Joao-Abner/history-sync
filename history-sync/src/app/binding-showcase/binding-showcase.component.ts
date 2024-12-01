import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-showcase',
  templateUrl: './binding-showcase.component.html',
  styleUrl: './binding-showcase.component.css'
})
export class BindingShowcaseComponent {
  title: string = 'Data Binding in Angular';
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  isButtonDisabled: boolean = false;

  toggleButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}
