import { Routes } from '@angular/router';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';

export const routes: Routes = [
  { path: 'empleado-list', component: EmpleadoListComponent},
  { path: 'nuevo', component: EmpleadoFormComponent},
  { path: 'editar/:id', component: EmpleadoFormComponent},
  {path: '**', redirectTo: 'empleado-list' }

];
