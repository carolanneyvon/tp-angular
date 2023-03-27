import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
       { path: 'home', component: HomeComponent },
       { path: 'presentation', component: PresentationComponent },
       { path: 'contact', component: ContactComponent },
       { path: '', redirectTo: 'home', pathMatch: 'full' }, //redirection
       { path: '**', redirectTo: 'home' }, //route qui n'existe pas pour éviter une erreur
    ]),
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}