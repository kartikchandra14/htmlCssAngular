import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'form', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
  { path: 'card', loadChildren: () => import('./card/card.module').then((m) => m.CardModule) },
  { path: 'percentage',
    loadChildren: () => import('./percentage-in-circle/percentage-in-circle.module').then((m) => m.PercentageInCircleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
