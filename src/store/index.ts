import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { SpeciesReducer } from "./species/reducer";
import { SpeciesState } from "./species/types";
import { RouterState } from "connected-react-router";
import { BrowserHistory } from "history";

export interface ApplicationState {
  species: SpeciesState;
  router: RouterState;
}

export const createRootReducer = (history: BrowserHistory) =>
  combineReducers({
    species: SpeciesReducer,
    router: connectRouter(history)
  });
