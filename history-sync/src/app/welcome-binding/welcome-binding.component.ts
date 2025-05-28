import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome-binding',
  templateUrl: './welcome-binding.component.html',
  styleUrls: ['./welcome-binding.component.css']
})
export class WelcomeBindingComponent implements OnInit {
  userName: string = '';
  welcomeMessage: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userName = this.userService.getUserName();
    this.updateWelcomeMessage();
  }

  updateWelcomeMessage(): void {
    this.userService.setUserName(this.userName);
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
