import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoFormComponent } from "./components/empleado-form/empleado-form.component";
import { EmpleadoListComponent } from "./components/empleado-list/empleado-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadoFormComponent, EmpleadoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quotest-angular';
}
