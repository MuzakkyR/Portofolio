import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'instagram/profil', loadChildren: './instagram/profil/profil.module#ProfilPageModule' },
  { path: 'xl/dashboard', loadChildren: './xl/dashboard/dashboard.module#DashboardPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
