import { Species, SpeciesActionTypes } from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../index";
import axios, { AxiosResponse } from "axios";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  return (dispatch: Dispatch) => {
    try {
      dispatch({
        type: SpeciesActionTypes.FETCH_REQUEST,
      });
      setTimeout(() => {
        axios
          .get(`https://swapi.dev/api/species/`)
          .then((response: AxiosResponse) => {
            const species = response.data;
            console.log("species", species);
            let formattedSpecies = species.results.map((data: any) => {
              return {
                name: data.name,
                designation: data.designation,
                classification: data.classification,
                average_height: data.average_height,
                average_lifespan: data.average_lifespan,
                url: data.url,
              };
            });

            return dispatch({
              type: SpeciesActionTypes.FETCH_SUCCESS,
              payload: formattedSpecies,
            });
          })
          .catch((error) => {
            return dispatch({
              type: SpeciesActionTypes.FETCH_ERROR,
              error: error,
            });
          });
      }, 5000);
    } catch (e) {
      return dispatch({
        type: SpeciesActionTypes.FETCH_ERROR,
      });
    }
  };
};

export const setSpeciesName: AppThunk = (species) => {
  console.log("setSpeciesName");
  console.log("species", species);
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: SpeciesActionTypes.SET_SPECIES,
        payload: species,
      });
    } catch (e) {
      return dispatch({
        type: SpeciesActionTypes.SET_SPECIES_ERROR,
        error: e,
      });
    }
  };
};
