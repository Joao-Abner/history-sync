import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild(MenuComponent) menuComponent!: MenuComponent;

  ngAfterViewInit(): void {
    // Certifique-se de que o menuComponent está disponível após a inicialização da visualização
  }

  // Método para controlar a animação do menu lateral esquerdo
  toggleMenu(): void {
    this.menuComponent.toggleMenu();
  }
}
