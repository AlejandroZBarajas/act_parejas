import { Component, Input } from '@angular/core';
import { PlanetI } from '../interfaces/planet-i';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrl: './planet-card.component.css',
})
export class PlanetCardComponent {
  @Input() planet: PlanetI | undefined;
  
}
