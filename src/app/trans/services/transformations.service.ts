import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TransformationI } from '../../characters-module/interfaces/charactersResponse-i';

@Injectable({
  providedIn: 'root',
})
export class TransformationsService {
  private url: string = 'https://dragonball-api.com/api/transformations';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TransformationI[]> {
    return this.http.get<TransformationI[]>(this.url);
  }
}
