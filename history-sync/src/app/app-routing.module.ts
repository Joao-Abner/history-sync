import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEventPageComponent } from './new-event-page/new-event-page.component';
import { SearchEventPageComponent } from './search-event-page/search-event-page.component';
import { MyHistoricalEventsPageComponent } from './my-historical-events-page/my-historical-events-page.component';
import { ApiHistoricalEventsPageComponent } from './api-historical-events-page/api-historical-events-page.component';

const routes: Routes = [
  { path: 'new-event', component: NewEventPageComponent },
  { path: 'search-event', component: SearchEventPageComponent },
  { path: 'my-historical-events', component: MyHistoricalEventsPageComponent },
  { path: 'api-historical-events', component: ApiHistoricalEventsPageComponent },
  { path: '', redirectTo: '/new-event', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
