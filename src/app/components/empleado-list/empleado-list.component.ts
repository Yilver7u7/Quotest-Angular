import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { EmpleadoService } from '../../services/empleado.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'empleado-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent implements OnInit{

  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe((data) => {
      this.empleados = data;
    });
  }
  deleteEmpleado(id: number): void {
    this.empleadoService.deleteEmpleado(id).subscribe(() => {
      this.empleados = this.empleados.filter((e) => e.id !== id);
    });
  }

}
