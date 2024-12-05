import { PlanetI } from '../../planets-module/interfaces/planet-i';
import { CharacterI } from './character-i';

export interface CharactersResponseI {
  items: CharacterI[];
  meta: MetaResponseI;
  links: LinksI;
}

export interface CharacterResponseI {
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
  originPlanet: PlanetI;
  transformations: TransformationI[];
}

export interface TransformationI {
  id: number | undefined;
  name: string;
  image: string;
  ki: string;
  deletedAt: string | null;
}

interface MetaResponseI {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

interface LinksI {
  first: string;
  previous: string;
  next: string;
  last: string;
}
