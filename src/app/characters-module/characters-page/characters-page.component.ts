import { Component, OnInit } from '@angular/core';
import { CharacterServiceService } from '../services/character-service.service';
import { CharactersResponseI } from '../interfaces/charactersResponse-i';
import { CharacterI } from '../interfaces/character-i';
import { TransformationsService } from '../../trans/services/transformations.service';
import { TransStorageService } from '../../trans/services/trans-storage.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css',
})
export class CharactersPageComponent implements OnInit {
  constructor(
    private charactersService: CharacterServiceService,
    private transformationService: TransformationsService,
    private transStorageService: TransStorageService
  ) {}
  charactersResponse: CharactersResponseI | undefined;
  charactersList: CharacterI[] = [];
  inputValue: string = '';

  ngOnInit(): void {
    this.charactersService.getCharactersResponse().subscribe((response) => {
      this.charactersResponse = response;
    });
    this.setTransformations();
  }

  validateInput(value: string): boolean {
    const regex = /^[a-zA-Z0-9]*$/;
    const input = value;

    if (!regex.test(input)) {
      return false;
    } else {
      return true;
    }
  }

  loadCharacters(): void {
    if (this.validateInput(this.inputValue)) {
      if (this.charactersResponse)
        this.charactersList = this.charactersResponse.items;
      console.log(this.charactersList);
    } else {
      alert('No se pueden ingresar caracteres especiales');
    }
  }

  setTransformations() {
    this.transformationService.getAll().subscribe((transformations) => {
      this.transStorageService.setTransformations(transformations);
    });
  }
}
