import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {


  fechaactual = new Date();
  
 mes = this.fechaactual.getMonth()
  dia = this.fechaactual.getDay()
  anio = this.fechaactual.getFullYear()
  dianame = this.fechaactual.toLocaleDateString('es-ES', {weekday: 'long'})
  mesnumber = this.getDaysInMonth(this.anio, this.mes)
  

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log( this.fechaactual.toDateString());
  }

  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  
}
