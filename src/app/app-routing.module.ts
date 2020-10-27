import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RankingComponent } from './ranking/ranking.component';
import { TastingsComponent } from './tastings/tastings.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
