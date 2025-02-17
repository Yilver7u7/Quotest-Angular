import { Component } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { EmpleadoService } from '../../services/empleado.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'empleado-form',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.css'
})
export class EmpleadoFormComponent {

  empleado: Empleado = { id: 0, nombre: '', cargo: '', edad: 0, salario: 0 };

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {}

  saveEmpleado(): void {
    if (this.empleado.id) {
      this.empleadoService.updateEmpleado(this.empleado.id, this.empleado).subscribe();
    } else {
      this.empleadoService.createEmpleado(this.empleado).subscribe();
    }
  }

}
