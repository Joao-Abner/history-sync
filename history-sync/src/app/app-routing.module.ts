import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome-binding/welcome-binding.component';
import { NewEventPageComponent } from './new-event-page/new-event-page.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Página inicial
  { path: 'new-event-page', component: NewEventPageComponent }, // Página de novo evento
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
