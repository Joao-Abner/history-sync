import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEventPageComponent } from './new-event-page/new-event-page.component';
import { SearchEventPageComponent } from './search-event-page/search-event-page.component';

const routes: Routes = [
  { path: 'new-event', component: NewEventPageComponent },
  { path: 'search-event', component: SearchEventPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
