import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { HistoryComponent } from './components/history/history.component';
import { TeamComponent } from './components/team/team.component';

//Mettre les infos dans app-routing.module.ts
// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//        { path: 'presentation', component: PresentationComponent },
//        { path: 'contact', component: ContactComponent },
//        { path: '', redirectTo: 'home', pathMatch: 'full' }, //redirection
//        { path: '**', redirectTo: 'home' }, //route qui n'existe pas pour éviter une erreur
// ]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    PresentationComponent,
    HistoryComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}