import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComunicacionService } from 'src/app/core/service/comunicacion.service';
import { calendarioModel } from 'src/app/models/calendario';


@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {

  myForm!: FormGroup;

  fechaActual = new Date()
 

  constructor(public fb: FormBuilder, public srvComunicacion: ComunicacionService) {

    this.myForm = this.fb.group({
      titulo: ['', [Validators.required]],
      descripcion: [''],
      dia: [0],
      mes: [0],
      anio: [0],
      lugar: [''],
      hora: [null,[Validators.required]]
    })


  }

  ngOnInit(): void {
  }

  crearEvento(){
    let dia = this.fechaActual.getDate()
    let mes = this.fechaActual.getMonth()
    let anio = this.fechaActual.getFullYear()

    this.myForm.value.dia = dia
    this.myForm.value.mes = mes
    this.myForm.value.anio = anio
    console.log(this.myForm.value);
    this.srvComunicacion.postEventos(this.myForm.value).subscribe({
      next:(resp) =>{
        this.obtenerEntradas()
        console.log(resp.status);
      } ,
      error:(r) =>{
        console.log(r);
      }
    })
  }

  obtenerEntradas(){
    this.srvComunicacion.getEntradas().subscribe({ 
      next: (data: calendarioModel ) => {
        this.srvComunicacion.datosEventos = data.body
        console.log(this.srvComunicacion.datosEventos);
        this.myForm.reset();
      },
      error:(err) => {
        console.error(err);
      }
    })

  }

  mostarDatos(){
    this.myForm.value.titulo = this.srvComunicacion.datosEventos[8]
  }
  

}
