import { Component } from '@angular/core';
import { GruposService } from '../servicios/grupos.service';

@Component({
  selector: 'app-grupo-reprovado',
  templateUrl: './grupo-reprovado.component.html',
  styleUrl: './grupo-reprovado.component.css'
})

export class GrupoReprovadoComponent {

  /**
   *
   */
  constructor( public grupoService: GruposService) {
  
    
  }
}
