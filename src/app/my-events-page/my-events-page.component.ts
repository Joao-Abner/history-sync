import { Component, OnInit } from '@angular/core';
import { MyEventService, Event } from '../services/my-events.service';

@Component({
  selector: 'app-my-events-page',
  templateUrl: './my-events-page.component.html',
  styleUrls: ['./my-events-page.component.css']
})
export class MyEventsPageComponent implements OnInit {
  events: Event[] = [];
  editMode: boolean = false;
  eventToEdit: Event | null = null;

  constructor(private myEventService: MyEventService) { }

  ngOnInit(): void {
    this.myEventService.getEvents().subscribe({
      next: (data) => this.events = data,
      error: (err) => console.error(err)
    });
  }

  // Inicia o modo de edição
  startEdit(event: Event) {
    // Cria uma cópia para edição
    this.eventToEdit = { ...event };
    this.editMode = true;
  }

  // Cancela a edição
  cancelEdit() {
    this.editMode = false;
    this.eventToEdit = null;
  }

  // Salva as alterações do evento
  saveEdit() {
    if (this.eventToEdit && this.eventToEdit.id) {
      this.myEventService.updateEvent(this.eventToEdit.id, this.eventToEdit).subscribe({
        next: () => {
          alert('Evento atualizado com sucesso!');
          this.editMode = false;
          this.eventToEdit = null;
          this.ngOnInit(); // Atualiza a lista
        },
        error: () => alert('Erro ao atualizar evento!')
      });
    }
  }

  // Atualiza todo o evento (PUT)
  updateEvent(event: Event) {
    if (!event.id) return;
    this.myEventService.updateEvent(event.id, event).subscribe({
      next: (updated) => {
        alert('Evento atualizado com sucesso!');
        // Atualiza a lista local, se necessário
        this.ngOnInit();
      },
      error: (err) => alert('Erro ao atualizar evento!')
    });
  }

  // Atualiza parcialmente o evento (PATCH)
  patchEvent(event: Event, partial: Partial<Event>) {
    if (!event.id) return;
    this.myEventService.patchEvent(event.id, partial).subscribe({
      next: (updated) => {
        alert('Evento atualizado parcialmente!');
        this.ngOnInit();
      },
      error: (err) => alert('Erro ao atualizar parcialmente!')
    });
  }

  // Deleta o evento
  deleteEvent(event: Event) {
    if (!event.id) return;
    if (confirm('Tem certeza que deseja deletar este evento?')) {
      this.myEventService.deleteEvent(event.id).subscribe({
        next: () => {
          alert('Evento deletado!');
          // Remove da lista local ou recarrega
          this.events = this.events.filter(e => e.id !== event.id);
        },
        error: (err) => alert('Erro ao deletar evento!')
      });
    }
  }
}
