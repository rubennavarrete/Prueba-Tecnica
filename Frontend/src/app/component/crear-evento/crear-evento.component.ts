import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComunicacionService } from 'src/app/core/service/comunicacion.service';
import { calendarioModel } from 'src/app/models/calendario';
import { Subject, takeUntil } from 'rxjs'
import { SwtichService } from 'src/app/core/service/swtich.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit, OnDestroy {

  myForm!: FormGroup;

  buenDia: number = 0

  private distroy$ = new Subject<any>()

  fechaActual = new Date()

  @Input() diaSeleccionado!: number

  constructor(public fb: FormBuilder,
    public srvComunicacion: ComunicacionService,
    public srvSwitch: SwtichService) {

    this.myForm = this.fb.group({
      titulo: ['', [Validators.required]],
      descripcion: [''],
      dia: [0],
      mes: [0],
      anio: [0],
      lugar: [''],
      hora: [null, [Validators.required]]
    })


  }


  ngOnInit(): void {
    // console.log('dia ->', this.srvSwitch.diaVolador);
    // console.log(this.srvSwitch.atrapandoDia$);

    



  }



  crearEvento() {
    this.srvSwitch.atrapandoDia$.pipe(takeUntil(this.distroy$)).subscribe({

      next: (resp: number) => {
        this.myForm.value.dia = resp;
        console.log(resp);
      },
      error: (r) => {
        console.log(r);
      }
    })


    // let dia = this.fechaActual.getDate()
    let mes = this.fechaActual.getMonth()
    let anio = this.fechaActual.getFullYear()

    // this.myForm.value.dia = this.srvSwitch.diaVolador
    this.myForm.value.mes = mes
    this.myForm.value.anio = anio
    console.log(this.myForm.value);



    this.srvComunicacion.postEventos(this.myForm.value)
      .pipe(takeUntil(this.distroy$)) //convertimos con el pipe la variable a un takeUntil
      .subscribe({
        next: (resp) => {
          this.obtenerEntradas()
          console.log(resp);
        },
        error: (r) => {
          console.log(r);
        }
      })
  }

  obtenerEntradas() {
    this.srvComunicacion.getEntradas()
      .pipe(takeUntil(this.distroy$))
      .subscribe({
        next: (data: calendarioModel) => {
          this.srvComunicacion.datosEventos = data.body
          console.log(this.srvComunicacion.datosEventos);
          this.myForm.reset();
        },
        error: (err) => {
          console.error(err);
        }
      })

  }

  mostarDatos() {
    this.myForm.value.titulo = this.srvComunicacion.datosEventos[8]
  }

  ngOnDestroy(): void {
    //el next hace que se destruya el componente
    this.distroy$.next(true)
    //aqui logramos la desubscripcion
    this.distroy$.unsubscribe()
  }


}
