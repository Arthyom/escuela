import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../interfaces/estudiante';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { GruposService } from '../../servicios/grupos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  response : any ;

  constructor( private gs: GruposService, 
    private fb: FormBuilder, private http: HttpClient ) {
    this.formReactivo = fb.group( {
      nombre:[ null, Validators.required ],
      desc: [null, Validators.required],
      aprobado: []
    })
  }

   async ngOnInit() {
    this.response = await 
    this.http.get('http://localhost/Moderno/KumbiaPHP/alumnos')
      .toPromise()



  }

  formPlantilla: Estudiante = {};

  formReactivo: FormGroup ;






 enviarReactivo(){
  const formValue : Estudiante = this.formReactivo.value
  if( this.formReactivo.controls['aprobado'].value === true ){
    this.gs.aprovados.push(formValue);
  }
  else{
    this.gs.reprovados.push(formValue);
  }

  this.formPlantilla = {}

 }

  async enviarTemplate( form: NgForm){
    
    if( this.formPlantilla.aprobado ){
      this.gs.aprovados.push(this.formPlantilla);
    }
    else{
      this.gs.reprovados.push(this.formPlantilla);
    }

    
    
    const r = await this.http.post('http://localhost/Moderno/KumbiaPHP/alumnos',  this.formPlantilla).toPromise()
    
    console.log(r)
    this.formPlantilla = {}

  }

}
