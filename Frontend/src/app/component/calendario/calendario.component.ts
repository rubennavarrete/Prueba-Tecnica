import { getLocaleDayNames } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/core/service/comunicacion.service';
import { SwtichService } from 'src/app/core/service/swtich.service';
import { calendarioModel, dataCalendario } from 'src/app/models/calendario';
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit, OnDestroy {
  
  
  private destroy$ = new Subject<any>()


  fechaactual = new Date();
  diasmes : number[] = []
 mes = this.fechaactual.getMonth()
  dia = this.fechaactual.getDay()
  
  anio = this.fechaactual.getFullYear()
  dianame = this.fechaactual.toLocaleDateString('es-ES', {weekday: 'long'})
  mesnumber = this.getDaysInMonth(this.anio, this.mes)
  

  constructor(public srvComunicacion: ComunicacionService,
              public srvSwitch: SwtichService) { 
    for (let i = 0; i<this.mesnumber; i++){
      this.diasmes[i] = i + 1;
    }
  }
  
  ngOnInit(): void {
    // console.log( this.dianame);

    

    this.srvComunicacion.getEntradas()
    .pipe(takeUntil(this.destroy$))
    .subscribe({ 
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

  mandarDia( day: number){
    let prueba = document.getElementById('formPadre') as any
    if (prueba){
      prueba.style.display = 'block'
    }
    this.srvSwitch.setAtrapandoDia(day)
    // console.log(this.srvSwitch.setAtrapandoDia(day));
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }


}
