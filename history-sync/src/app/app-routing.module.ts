import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeBindingComponent } from './welcome-binding/welcome-binding.component';
import { NewEventPageComponent } from './new-event-page/new-event-page.component';
import { SearchEventsPageComponent } from './search-events-page/search-events-page.component';

const routes: Routes = [
  { path: '', component: WelcomeBindingComponent }, // Página inicial
  { path: 'saudacao/:nome', component: WelcomeBindingComponent }, // rota com parâmetro
  { path: 'new-event-page', component: NewEventPageComponent }, // Página de novo evento
  { path: 'search-events-page', component: SearchEventsPageComponent }, // Página de novo evento
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
