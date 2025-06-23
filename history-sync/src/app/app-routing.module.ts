import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeBindingComponent } from './welcome-binding/welcome-binding.component';
import { NewEventPageComponent } from './new-event-page/new-event-page.component';
import { SearchEventsPageComponent } from './search-events-page/search-events-page.component';
import { MyEventsPageComponent } from './my-events-page/my-events-page.component';

const routes: Routes = [
  { path: '', component: WelcomeBindingComponent },
  { path: 'saudacao/:nome', component: WelcomeBindingComponent }, // Rota com parâmetro
  { path: 'new-event-page', component: NewEventPageComponent },
  { path: 'search-events-page', component: SearchEventsPageComponent },
  { path: 'my-events', component: MyEventsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
