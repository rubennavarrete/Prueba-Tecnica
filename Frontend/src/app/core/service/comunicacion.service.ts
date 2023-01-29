import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import config from 'config/config';
import { calendarioModel, dataCalendario } from 'src/app/models/calendario';
@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private urlApi: string = config.URL_API_BASE + 'entradas'

  datosEventos!: dataCalendario[]

  constructor(private http: HttpClient) { }

  getEntradas(){
    return this.http.get<calendarioModel>(this.urlApi, {

      withCredentials: true, 
    })
  }

}
