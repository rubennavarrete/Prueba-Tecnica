import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeardComponent } from './heard/heard.component';
import { InformationComponent } from './information/information.component';
import { ModalComponent } from './modal/modal.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { PartesuperiorComponent } from './partesuperior/partesuperior.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [BodyComponent, FooterComponent, HeardComponent, InformationComponent, ModalComponent, CalendarioComponent, PartesuperiorComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[BodyComponent, FooterComponent, HeardComponent, InformationComponent, ModalComponent, CalendarioComponent, PartesuperiorComponent, ButtonComponent]
})
export class ComponentModule { }
