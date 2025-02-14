import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('menuLateral') menuLateral!: ElementRef;

  constructor(private menuService: MenuService, private router: Router) { }

  // Método para controlar a animação do menu lateral esquerdo
  ngOnInit(): void {
    // Inscreve-se no Observable menuToggle$ do MenuService
    // Sempre que o MenuService emite um valor através do menuToggle$, o método toggleMenu é chamado
    this.menuService.menuToggle$.subscribe(() => {
      this.toggleMenu();
    });
  }

  // Método para alternar a visibilidade do menu lateral esquerdo
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
