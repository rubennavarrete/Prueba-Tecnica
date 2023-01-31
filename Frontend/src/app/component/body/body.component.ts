import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/core/service/comunicacion.service';
import { SwtichService } from 'src/app/core/service/swtich.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  switch!: boolean


  constructor(public srvComunicacion: ComunicacionService, 
              public srvSwtch: SwtichService) { 
         
               }

  ngOnInit(): void {
    
  }

 mostrarFormulario(){
  this.switch = true
 }

}
