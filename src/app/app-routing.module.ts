import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocacheComponent } from './geocache/geocache.component';
import { LoginComponent } from './login/login.component';
import { RankingComponent } from './ranking/ranking.component';
import { TastingsComponent } from './tastings/tastings.component';

const routes: Routes = [
  {
    path: '',
    component: GeocacheComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'tastings',
    component: TastingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
