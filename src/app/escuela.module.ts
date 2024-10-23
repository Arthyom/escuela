import { NgModule } from "@angular/core";
import { EstudianteComponent } from "./estudiante/estudiante.component";
import { GrupoAprovadoComponent } from "./grupo-aprovado/grupo-aprovado.component";
import { FormsModule } from "@angular/forms";
import { GrupoReprovadoComponent } from "./grupo-reprovado/grupo-reprovado.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        EstudianteComponent, 
        GrupoReprovadoComponent,
        GrupoAprovadoComponent
    ],
    imports:[
        
        FormsModule,
        CommonModule,
    ],
    exports:[
        EstudianteComponent,
        GrupoAprovadoComponent,
        GrupoReprovadoComponent,
    ]
})
export class EscuelaModule {
}