export interface Species {
  name: string;
  designation: string;
  classification: string;
  average_height: string;
  average_lifespan: string;
  url: string;
}

export interface Species {
  name: string;
  designation: string;
  classification: string;
  average_height: string;
  average_lifespan: string;
  url: string;
}

export enum SpeciesActionTypes {
  FETCH_REQUEST = "@@species/FETCH_REQUEST",
  FETCH_SUCCESS = "@@species/FETCH_SUCCESS",
  FETCH_ERROR = "@@species/FETCH_ERROR",
  SET_SPECIES = "@@species/SET_SPECIES",
  SET_SPECIES_ERROR = "@@species/SET_SPECIES_ERROR",
}

export interface SpeciesState {
  readonly loading: boolean;
  readonly species: Species[];
  readonly errors?: string;
  readonly selectedSpecies: string;
}
