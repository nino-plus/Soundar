import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterComponent } from './enter.component';

const routes: Routes = [
  {
    path: '',
    component: EnterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterRoutingModule { }
