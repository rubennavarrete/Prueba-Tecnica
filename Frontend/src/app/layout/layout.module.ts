import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../component/component.module';
import { LayoutSimpleComponent } from './layout-simple/layout-simple.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutSimpleComponent],
  imports: [
    CommonModule, 
    ComponentModule
  ],
  exports:[LayoutSimpleComponent]
})
export class LayoutModule { }
