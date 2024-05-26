import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaComponent } from './pantalla/pantalla.component';
import { HeaderComponent } from './pantalla/header/header.component';
import { SidenavComponent } from './pantalla/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', component: PantallaComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'sidenav', component: SidenavComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
