import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-binding.component.html',
  styleUrls: ['./welcome-binding.component.css']
})
export class WelcomeComponent {
  userName: string = '';
  welcomeMessage: string = '';

  constructor() {
    this.updateWelcomeMessage(); // Inicializa a mensagem com base no horário
  }

  updateWelcomeMessage(): void {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.welcomeMessage = this.userName
        ? `Bom dia, ${this.userName}! Bem-vindo ao HistorySync!`
        : 'Bom dia! Bem-vindo ao HistorySync!';
    } else if (hour < 18) {
      this.welcomeMessage = this.userName
        ? `Boa tarde, ${this.userName}! Bem-vindo ao HistorySync!`
        : 'Boa tarde! Bem-vindo ao HistorySync!';
    } else {
      this.welcomeMessage = this.userName
        ? `Boa noite, ${this.userName}! Bem-vindo ao HistorySync!`
        : 'Boa noite! Bem-vindo ao HistorySync!';
    }
  }
}
