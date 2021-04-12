import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSourceComponent } from './add-source/add-source.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addSource', component:AddSourceComponent},
  {path: 'login', component:LoginComponent},
  {path : 'logout', component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
