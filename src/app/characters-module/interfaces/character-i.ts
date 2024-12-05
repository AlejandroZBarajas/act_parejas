import { PlanetI } from '../../planets-module/interfaces/planet-i';

export interface CharacterI {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
  originPlanet?: PlanetI;
}
