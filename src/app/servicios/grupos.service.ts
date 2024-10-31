import { Injectable } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante';



export class GruposService {

  aprovados: Estudiante[] = [
    {
      nombre : "Alexis",
      aprobado: true,
      desc: "Es un estudiante muy raro",
      img : "https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
  },
  {
    nombre : "Lessli",
    aprobado: true,
    desc: "Es un estudiante muy raro",
    img : "https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
  },
  {
    nombre : "alfredo",
    aprobado: true,
    desc: "Es un estudiante muy raro",
    img : "https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
}

  ];

  reprovados: Estudiante[] = [
    {
      nombre : "Mariano",
      aprobado: false,
      desc: "Es un estudiante muy raro",
      img : "https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
  },
  {
    nombre : "Maria",
    aprobado: false,
    desc: "Es un estudiante muy raro",
    img : "https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
  },
  {
    nombre : "Marco",
    aprobado: false,
    desc: "Es un estudiante muy raro",
    img : "https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
}
  ];


  removeFromAprovados( item: Estudiante){
    this.aprovados = this.aprovados
                        .filter( x => x.nombre != item.nombre);

    this.reprovados.push(item);
  }


  removeFromReprovados( item: Estudiante){
    this.reprovados = this.reprovados
                        .filter( x => x.nombre != item.nombre);

    this.aprovados.push(item);
  }
}
