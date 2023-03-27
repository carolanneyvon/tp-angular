import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartnersComponent } from './components/partners/partners.component';
import { FrancepartnersComponent } from './components/francepartners/francepartners.component';
import { SpainpartnersComponent } from './components/spainpartners/spainpartners.component';
import { GermanypartnersComponent } from './components/germanypartners/germanypartners.component';


@NgModule({
  declarations: [
    AppComponent,
    PartnersComponent,
    FrancepartnersComponent,
    SpainpartnersComponent,
    GermanypartnersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}