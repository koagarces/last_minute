import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import EventReducer from "./Reducers/eventReducer";
import MatchReducer from "./Reducers/matchReducer";

const store = createStore(
  combineReducers({ eventState: EventReducer, matchesState: MatchReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
