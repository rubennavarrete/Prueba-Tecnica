import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partesuperior',
  templateUrl: './partesuperior.component.html',
  styleUrls: ['./partesuperior.component.css']
})
export class PartesuperiorComponent implements OnInit {

  mesName: string = 'January'
  anio: number = 2023

  constructor() { }

  ngOnInit(): void {
    console.log(this.anio, this.mesName)
  }

}
