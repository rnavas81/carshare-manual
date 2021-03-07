import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualComponent } from './views/manual/manual.component';
import { Version2Component } from './views/version2/version2.component';

const routes: Routes = [
  { path: '', component: ManualComponent },
  { path: 'version2', component: Version2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
