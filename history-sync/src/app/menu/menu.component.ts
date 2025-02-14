import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('menuLateral') menuLateral!: ElementRef;

  constructor(private router: Router) { }

  // Método para controlar a animação do menu lateral esquerdo
  toggleMenu(): void {
    const menuLateral = this.menuLateral.nativeElement;
    menuLateral.classList.toggle('oculto');
  }

  // Método para navegar para a página de novo evento
  openNewEventPage(): void {
    this.router.navigate(['/new-event']);
  }

  // Método para navegar para a página de buscar evento
  openSearchEventPage(): void {
    this.router.navigate(['/search-event']);
  }
}
