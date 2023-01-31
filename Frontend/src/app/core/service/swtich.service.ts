import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

const diaVolador: number = 0

@Injectable({
  providedIn: 'root'
})



export class SwtichService {

  constructor() { }

  private diaVolador$ = new BehaviorSubject<number>(diaVolador)
  

  

  get atrapandoDia$(): Observable<number>{
    return this.diaVolador$.asObservable()
  }

  setAtrapandoDia(data: number){
    this.diaVolador$.next(data)
  }

}
