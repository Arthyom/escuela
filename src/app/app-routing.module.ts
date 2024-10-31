import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GruposComponent } from './grupos/grupos.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CreateComponent } from './estudiantes/create/create.component';

const routes: Routes = [
  {path: '', redirectTo: 'Inicio' , pathMatch: 'full'},
  {path:'Inicio', component: InicioComponent},
  {path:'Grupos', component: GruposComponent},
  
  {path: 'Estudiantes', component: EstudiantesComponent},
  {path: "Estudiantes/Create", component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
