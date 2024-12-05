import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CharactersResponseI } from '../interfaces/charactersResponse-i';

@Injectable({
  providedIn: 'root',
})
export class CharacterServiceService {
  private apiUrl = `${environment.apiUrl}/characters`;

  constructor(private http: HttpClient) {}

  getCharactersResponse(): Observable<CharactersResponseI> {
    return this.http.get<CharactersResponseI>(`${this.apiUrl}`);
  }
}
