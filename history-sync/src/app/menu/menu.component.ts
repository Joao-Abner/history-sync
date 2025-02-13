import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Função para alternar a visibilidade do campo de pesquisa
    function toggleSearch() {
      const searchInput = document.getElementById("searchInput");
      if (searchInput) {
        searchInput.setAttribute(
          "type",
          searchInput.getAttribute("type") === "hidden" ? "text" : "hidden"
        );
      }
    }

    // Adiciona o evento de clique ao botão de pesquisa
    const searchButton = document.querySelector(".search-button");
    if (searchButton) {
      searchButton.addEventListener("click", toggleSearch);
    }

    // Controla a animação do menu lateral esquerdo
    const menuButton = document.querySelector(".menu-button");
    if (menuButton) {
      menuButton.addEventListener("click", function () {
        const menuLateral = document.querySelector(".menu-lateral-esquerdo");
        if (menuLateral) {
          menuLateral.classList.toggle("oculto");
        }
      });
    }

    // Gerencia a classe ativa ao botão clicado
    const buttons = document.querySelectorAll(".new-event-button,.search-button");
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });

    // Função para abrir o modal "Novo Evento"
    const newEventButton = document.querySelector(".new-event-button");
    if (newEventButton) {
      newEventButton.addEventListener("click", function () {
        const novoEventoModal = document.getElementById("novoEventoModal");
        if (novoEventoModal) {
          const modal = new bootstrap.Modal(novoEventoModal);
          modal.show();
        }
      });
    }

    // Função para abrir o modal "Buscar Evento"
    const buttonSearchEvents = document.getElementById("search-events");
    if (buttonSearchEvents) {
      buttonSearchEvents.addEventListener("click", () => {
        const buscarEventoModal = document.getElementById("buscarEventoModal");
        if (buscarEventoModal) {
          const modal = new bootstrap.Modal(buscarEventoModal);
          modal.show();
        }
      });
    }
  }
}
