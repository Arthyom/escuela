import { NgModule } from "@angular/core";
import { EstudianteComponent } from "./estudiante/estudiante.component";
import { GrupoAprovadoComponent } from "./grupo-aprovado/grupo-aprovado.component";
import { FormsModule } from "@angular/forms";
import { GrupoReprovadoComponent } from "./grupo-reprovado/grupo-reprovado.component";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { InicioComponent } from "./inicio/inicio.component";
import { GruposComponent } from "./grupos/grupos.component";
import { EstudiantesComponent } from "./estudiantes/estudiantes.component";
import { RouterModule } from "@angular/router";
import { GruposService } from "./servicios/grupos.service";
import { CreateComponent } from "./estudiantes/create/create.component";


@NgModule({
    declarations:[
        CreateComponent,
        InicioComponent,
        GruposComponent,
        EstudiantesComponent,
        MenuComponent,
        EstudianteComponent, 
        GrupoReprovadoComponent,
        GrupoAprovadoComponent
    ],
    imports:[
        RouterModule,
        FormsModule,
        CommonModule,
    ],
    exports:[
        CreateComponent,
        InicioComponent,
        GruposComponent,
        EstudiantesComponent,
        MenuComponent,
        EstudianteComponent,
        GrupoAprovadoComponent,
        GrupoReprovadoComponent,
    ]
})
export class EscuelaModule {
}