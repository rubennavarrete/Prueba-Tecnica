import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import config from 'config/config';
import { calendarioModel, dataCalendario, nuevoEvento } from 'src/app/models/calendario';
@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private urlApi: string = config.URL_API_BASE + 'entradas'

  datosEventos!: dataCalendario[]

  eventoNuevo: nuevoEvento = {
    titulo:      '',
    descripcion: '',
    dia:         0,
    mes:         0,
    anio:        0,
    lugar:       '',
    hora:        ''
  }

  constructor(private http: HttpClient) { }

  getEntradas(){
    return this.http.get<calendarioModel>(this.urlApi, {

      withCredentials: true, 
    })
  }

  postEventos(eventoNuevo: nuevoEvento){
    return this.http.post<calendarioModel>(this.urlApi, eventoNuevo, {
      withCredentials: true,
    })
  }

}
