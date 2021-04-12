import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSourceComponent } from './add-source/add-source.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthguardService } from './service/authguard.service';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate:[AuthguardService]},
  {path: 'addSource', component:AddSourceComponent, canActivate:[AuthguardService]},
  {path: 'login', component:LoginComponent},
  {path : 'logout', component:LogoutComponent, canActivate:[AuthguardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
