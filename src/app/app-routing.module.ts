import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocacheComponent } from './geocache/geocache.component';
import { RankingComponent } from './ranking/ranking.component';
import { TastingsComponent } from './tastings/tastings.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: GeocacheComponent
  // },
  {
    path: '',
    component: RankingComponent
  },
  {
    path: 'tastings',
    component: TastingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],  // .../#/crisis-center/,
  exports: [RouterModule]
})
export class AppRoutingModule { }
