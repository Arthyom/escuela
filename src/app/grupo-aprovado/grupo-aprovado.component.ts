import { Component } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante';

@Component({
  selector: 'app-grupo-aprovado',
  templateUrl: './grupo-aprovado.component.html',
  styleUrl: './grupo-aprovado.component.css'
})
export class GrupoAprovadoComponent {

  Estudiantes: Estudiante[] = [
    {
      nombre : "Alexis",
      aprobado: true,
      desc: "Es un estudiante muy raro",
      img : "https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
  },
  {
    nombre : "Lessli",
    aprobado: false,
    desc: "Es un estudiante muy raro",
    img : "https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
  },
  {
    nombre : "alfredo",
    aprobado: true,
    desc: "Es un estudiante muy raro",
    img : "https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
},

];

}
