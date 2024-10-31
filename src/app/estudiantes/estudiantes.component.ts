import { Component } from '@angular/core';
import { GruposService } from '../servicios/grupos.service';
import { Estudiante } from '../interfaces/estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})


export class EstudiantesComponent {

  allStudents: Estudiante[] = [

  ]

  /**
   *
   */
  constructor( private gS: GruposService ) {
    this.allStudents = [
      ...gS.aprovados,
      ...gS.reprovados
    ]
  }
}
