import { Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { ApplicationState, createRootReducer } from "./store";
import { BrowserHistory } from "history";
import logger from 'redux-logger';

export default function configureStore(
  history: BrowserHistory,
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(routerMiddleware(history), thunk, logger),
  );
  return store;
}
