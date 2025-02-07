import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  title: string = 'Menu';
  name: string = '';
  confirmationMessage: string = '';

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    try {
      const data = await this.apiService.getData('entities');
      console.log('Data from API:', data);
    } catch (error) {
      console.error('Erros fetching data:', error);
    }
  }

  async addEntity() {
    const newEntity = { name: this.name };
    try {
      const result = await this.apiService.postData('entities', newEntity);
      console.log('Entity added:', result);
      this.confirmationMessage = 'Entidade adicionada com sucesso!';
    } catch (error) {
      console.error('Error adding entity:', error);
      this.confirmationMessage = 'Erro ao adicionar entidade.';
    }
  }

}
