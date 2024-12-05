import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { PlanetsModalComponent } from './planets-modal/planets-modal.component';

@NgModule({
  declarations: [PlanetCardComponent, PlanetsModalComponent],
  imports: [CommonModule],
  exports: [PlanetsModalComponent],
})
export class PlanetsModuleModule {}
