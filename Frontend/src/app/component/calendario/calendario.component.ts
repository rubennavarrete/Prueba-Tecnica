import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/core/service/comunicacion.service';
import { calendarioModel, dataCalendario } from 'src/app/models/calendario';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  prueba = 28
  


  fechaactual = new Date();
  diasmes : number[] = []
 mes = this.fechaactual.getMonth()
  dia = this.fechaactual.getDay()
  
  anio = this.fechaactual.getFullYear()
  dianame = this.fechaactual.toLocaleDateString('es-ES', {weekday: 'long'})
  mesnumber = this.getDaysInMonth(this.anio, this.mes)
  

  constructor(public srvComunicacion: ComunicacionService) { 
    for (let i = 0; i<this.mesnumber; i++){
      this.diasmes[i] = i + 1;
    }
  }

  ngOnInit(): void {
    // console.log( this.dianame);
    this.srvComunicacion.getEntradas().subscribe({ 
      next: (data: calendarioModel ) => {
        this.srvComunicacion.datosEventos = data.body
        console.log(this.srvComunicacion.datosEventos);
      },
      error:(err) => {
        console.error(err);
      }
    })
  }

  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  mostrarFormulario(){
    
  }
  
}
