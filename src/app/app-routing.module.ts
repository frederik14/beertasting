import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
