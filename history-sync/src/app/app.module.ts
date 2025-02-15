import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NewEventPageComponent } from './new-event-page/new-event-page.component';
import { SearchEventPageComponent } from './search-event-page/search-event-page.component';
import { MyHistoricalEventsPageComponent } from './my-historical-events-page/my-historical-events-page.component';
import { ApiHistoricalEventsPageComponent } from './api-historical-events-page/api-historical-events-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    NewEventPageComponent,
    SearchEventPageComponent,
    MyHistoricalEventsPageComponent,
    ApiHistoricalEventsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
