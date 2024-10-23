import { Component, Input } from "@angular/core";
import { Estudiante } from '../interfaces/estudiante';

@Component({
    selector: "app-estudiante",
    templateUrl: './estudiante.component.html'
})

export class EstudianteComponent {
    
    @Input() estudiante: Estudiante= {}
    
    
}

