import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import config from 'config/config';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private urlApi: string = config.URL_API_BASE + 'entradas'

  constructor(private http: HttpClient) { }

  getEntradas(){
    return this.http.get<any>(this.urlApi, {

      withCredentials: true, 
    })
  }

}
