import { Component } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private menuService: MenuService) { }

  // Método para controlar a animação do menu lateral esquerdo
  toggleMenu(): void {
    this.menuService.toggleMenu();
  }
}
