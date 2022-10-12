import { Reducer } from "redux";
import { SpeciesActionTypes, SpeciesState } from "./types";

export const initialState: SpeciesState = {
  species: [],
  errors: undefined,
  loading: false,
};

const reducer: Reducer<SpeciesState> = (state = initialState, action) => {
  switch (action.type) {
    case SpeciesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case SpeciesActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, species: action.payload };
    }
    case SpeciesActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as SpeciesReducer };
