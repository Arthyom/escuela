import { Component } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante';
import { GruposService } from '../servicios/grupos.service';

@Component({
  selector: 'app-grupo-aprovado',
  templateUrl: './grupo-aprovado.component.html',
  styleUrl: './grupo-aprovado.component.css'
})
export class GrupoAprovadoComponent {

 

 /**
  *
  */
 constructor( public grupoService: GruposService ) {
  
  
 }


//  removeFromApproved( item: Estudiante){

//   console.log('se esta enviando ');
//   console.log(item);
//   this.Estudiantes = this.Estudiantes.filter( x => x.nombre != item.nombre);
//  }

}
