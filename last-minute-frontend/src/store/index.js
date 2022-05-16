import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import EventReducer from "./Reducers/eventReducer";
import MatchReducer from "./Reducers/matchReducer";
import UserReducer from "./Reducers/userReducer";
import MessageReducer from "./Reducers/messageReducer";

const store = createStore(
  combineReducers({
    eventState: EventReducer,
    matchState: MatchReducer,
    userState: UserReducer,
    messageState: MessageReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
