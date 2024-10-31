import { Component, EventEmitter, input, Input, Output } from "@angular/core";
import { Estudiante } from '../interfaces/estudiante';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-estudiante",
    templateUrl: './estudiante.component.html'
})

export class EstudianteComponent {
    
    @Input({required: true}) estudiante: Estudiante= {}
    @Input({required: false}) isFromList: boolean = false;

    @Output() estudianteAprobado = new EventEmitter<Estudiante>();


    /**
     *
     */
    constructor( private http: HttpClient) {
       
        
    }


    checkChange( ){
        console.log(this.estudiante);
        
        this.estudianteAprobado.emit(this.estudiante);

    }


    deleteItem(item:Estudiante){
        this.http.delete(
            `estudiantes/${item.nombre}`

        )
    }

    editItem(item:Estudiante){
        
    }
    
    detailsItem(item:Estudiante){
        
    }
    
}

