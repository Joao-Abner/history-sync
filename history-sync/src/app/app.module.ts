import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeBindingComponent } from './welcome-binding/welcome-binding.component';
import { NewEventPageComponent } from './new-event-page/new-event-page.component';
import { SearchEventsPageComponent } from './search-events-page/search-events-page.component';
import { MyEventsPageComponent } from './my-events-page/my-events-page.component';
import { provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeBindingComponent,
    NewEventPageComponent,
    SearchEventsPageComponent,
    MyEventsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
