import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSourceComponent } from './add-source/add-source.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addSource', component:AddSourceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
