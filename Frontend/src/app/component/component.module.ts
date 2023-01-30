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
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [BodyComponent, FooterComponent, HeardComponent, InformationComponent, ModalComponent, CalendarioComponent, PartesuperiorComponent, ButtonComponent, CrearEventoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[BodyComponent, FooterComponent, HeardComponent, InformationComponent, ModalComponent, CalendarioComponent, PartesuperiorComponent, ButtonComponent]
})
export class ComponentModule { }
