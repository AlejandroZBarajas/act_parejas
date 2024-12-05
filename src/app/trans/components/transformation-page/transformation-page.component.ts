import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransformationsService } from '../../services/transformations.service';
import { Transformation } from '../../class/transformation';
import { PlanetsServiceService } from '../../../planets-module/services/planets-service.service';
import { TransformationI } from '../../../characters-module/interfaces/charactersResponse-i';
import { CharacterI } from '../../../characters-module/interfaces/character-i';
import { TransStorageService } from '../../services/trans-storage.service';

@Component({
  selector: 'app-transformation-page',
  templateUrl: './transformation-page.component.html',
  styleUrls: ['./transformation-page.component.css'],
})
export class TransformationPageComponent implements OnInit {
  transformations: TransformationI[] = [];
  characterId: number | null = null;
  character: CharacterI | undefined;
  localCharacterTransformations: TransformationI[] = [];
  showModal: boolean = false;
  selectedTransformation: TransformationI = {
    id: 0,
    name: '',
    ki: '',
    image: '',
    deletedAt: null,
  };
  public filteredTransformations: Transformation[] = [];
  public characterName: string | null = null;

  constructor(
    private transformationService: TransformationsService,
    private route: ActivatedRoute,
    private planetsService: PlanetsServiceService,
    private router: Router,
    private transStorageService: TransStorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.characterId = id ? +id : null;

      this.planetsService
        .getCharacterWithPlanet(this.characterId)
        .subscribe((character) => {
          this.character = character;
          this.transformations = character.transformations;
          this.loadTransformations();
        });
    });
  }

  updateTransformation(updatedTransformation: TransformationI): void {
    if (updatedTransformation.id) {
      this.transStorageService.updateTrasnformationKiById(
        updatedTransformation.id,
        updatedTransformation.ki
      );
      this.loadTransformations();
    }
  }
  loadTransformations() {
    this.setLocalTransformations();
  }

  setLocalTransformations() {
    this.transformations.forEach((transformation) => {
      if (transformation.id)
        this.localCharacterTransformations.push(
          this.transStorageService.getTransfromationById(transformation.id) ||
            transformation
        );
    });
  }

  toNextTrasformation(): void {
    this.localCharacterTransformations = [];
    if (this.character) {
      const nextId = this.character.id === 10 ? 1 : this.character.id + 1;
      this.router.navigate([`/transformations`, nextId]);
    }
  }

  toPrevTrasformation(): void {
    this.localCharacterTransformations = [];
    if (this.character) {
      const prevId = this.character.id === 1 ? 10 : this.character.id - 1;
      this.router.navigate([`/transformations`, prevId]);
    }
  }

  returnToCharacters(): void {
    this.router.navigate(['/characters']);
  }
}
