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
  data: any[] = []; // Array para armazenar os dados da API
  showData: boolean = true; // Flag para exibir ou não os dados da API

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.apiService.getData('entities').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  addEntity() {
    if (!this.name) {
      this.confirmationMessage = 'Por favor, preencha o campo nome!';
      return;
    }


    const newEntity = { name: this.name };
    this.apiService.postData('entities', newEntity).subscribe(
      (result) => {
        console.log('Entity added:', result);
        this.confirmationMessage = 'Entidade adicionada com sucesso!';
        this.name = '';
        this.getData();
      },
      (error) => {
        console.error('Error adding entity:', error);
        this.confirmationMessage = 'Erro ao adicionar entidade!';
      }
    );
  }
}
