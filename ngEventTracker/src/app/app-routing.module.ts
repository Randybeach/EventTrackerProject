import { JumpListComponent } from './components/jump-list/jump-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
  { path: 'stats', component: StatsComponent },
  { path: 'jumps', component: JumpListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
