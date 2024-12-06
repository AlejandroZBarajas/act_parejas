import { PlanetI } from './planet-i';

export interface PlanetResponseI {
  items: PlanetI[];
  meta: MetaResponseI;
  links: LinksI;
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
