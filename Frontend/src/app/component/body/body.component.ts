import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/core/service/comunicacion.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public srvComunicacion: ComunicacionService) { }

  ngOnInit(): void {
    this.srvComunicacion.getEntradas().subscribe({ 
      next: (data: any ) => {
        console.log(data);
      },
      error:(err) => {
        console.error(err);
      }
    })
  }

}
