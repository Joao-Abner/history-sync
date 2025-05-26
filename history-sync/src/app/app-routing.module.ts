import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome-binding/welcome-binding.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Página inicial
  // { path: 'new-event', component:  }, // Página de novo evento
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
