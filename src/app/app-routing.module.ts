import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PartnersComponent } from './components/partners/partners.component';
import { FrancepartnersComponent } from './components/francepartners/francepartners.component';
import { SpainpartnersComponent } from './components/spainpartners/spainpartners.component';
import { GermanypartnersComponent } from './components/germanypartners/germanypartners.component';

const routes: Routes = [
  { path: 'partners', 
    //component: PartnersComponent,
    pathMatch: 'prefix',
    children: [
      {path: 'france', component: FrancepartnersComponent},
      {path: 'espagne', component: SpainpartnersComponent},
      {path: 'allemagne', component: GermanypartnersComponent},
]  },
  { path: '', redirectTo: 'partners', pathMatch: 'full' },
  { path: '**', redirectTo: 'partners' }, //route qui n'existe pas pour éviter une erreur
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}