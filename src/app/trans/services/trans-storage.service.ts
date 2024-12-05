import { Injectable } from '@angular/core';
import { TransformationI } from '../../characters-module/interfaces/charactersResponse-i';

@Injectable({
  providedIn: 'root',
})
export class TransStorageService {
  private localStorageKey = 'transformations';

  constructor() {
    this.loadTransformations();
  }

  transformations: TransformationI[] = [];

  private loadTransformations() {
    const storedData = localStorage.getItem(this.localStorageKey);
    this.transformations = storedData ? JSON.parse(storedData) : [];
  }

  private saveTransformations() {
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.transformations)
    );
  }

  setTransformations(transformations: TransformationI[]) {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (!storedData) {
      this.transformations = transformations;
      this.saveTransformations();
    }
  }

  getTransformations() {
    return this.transformations;
  }

  getTransfromationById(id: number) {
    return this.transformations.find(
      (transformation) => transformation.id === id
    );
  }

  updateTrasnformationKiById(id: number, newKi: string) {
    const toUpdateTransformation: TransformationI | undefined =
      this.getTransfromationById(id);

    if (toUpdateTransformation) {
      const index: number = this.transformations.indexOf(
        toUpdateTransformation
      );
      toUpdateTransformation.ki = newKi;
      this.transformations[index] = toUpdateTransformation;
      this.saveTransformations();
    }

    console.log(this.transformations);
  }
}
