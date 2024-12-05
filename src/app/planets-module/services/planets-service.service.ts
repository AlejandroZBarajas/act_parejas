import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetResponseI } from '../interfaces/planet-response-i';
import {
  CharacterResponseI,
  CharactersResponseI,
} from '../../characters-module/interfaces/charactersResponse-i';

@Injectable({
  providedIn: 'root',
})
export class PlanetsServiceService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getPlanetsResponse(): Observable<PlanetResponseI> {
    return this.http.get<PlanetResponseI>(`${this.apiUrl}/planets`);
  }

  getCharacterWithPlanet(
    characterId: number | undefined | null
  ): Observable<CharacterResponseI> {
    return this.http.get<CharacterResponseI>(
      `${this.apiUrl}/characters/${characterId}`
    );
  }
}
