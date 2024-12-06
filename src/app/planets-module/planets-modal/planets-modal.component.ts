import { Component, Input, OnInit } from '@angular/core';
import { PlanetsServiceService } from '../services/planets-service.service';
import { PlanetI } from '../interfaces/planet-i';

@Component({
  selector: 'app-planets-modal',
  templateUrl: './planets-modal.component.html',
  styleUrls: ['./planets-modal.component.css'],
})
export class PlanetsModalComponent implements OnInit {
  @Input() characterId: number | undefined;
  characterPlanet: PlanetI | undefined;
  isOpen: boolean = false;

  constructor(private planetsService: PlanetsServiceService) {}

  ngOnInit(): void {}

  openModal(characterId: number | undefined): void {
    this.characterId = characterId;

    this.planetsService.getCharacterWithPlanet(this.characterId).subscribe(
      (character) => {
        this.characterPlanet = character.originPlanet;
        this.isOpen = true;
      },
      (error) => {
        console.error('Error fetching character planet:', error);
      }
    );
  }

  closeModal(): void {
    this.isOpen = false;
    this.characterPlanet = undefined;
  }
}
