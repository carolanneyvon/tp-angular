import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { HistoryComponent } from './components/history/history.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'presentation', 
    //component: PresentationComponent,
    children: [
      {path: 'team', component: TeamComponent},
      {path: 'history', component: HistoryComponent},
]  },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //redirection
  { path: '**', redirectTo: 'home' }, //route qui n'existe pas pour éviter une erreur
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}