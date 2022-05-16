const {
  GET_MATCHES_FROM_USER,
  CREATE_MATCH,
  GET_MATCHES_FROM_EVENT,
} = require("../types");

const iState = {
  userMatches: [],
  eventMatches: [],
  match: {},
};

const MatchReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MATCHES_FROM_USER:
      return { ...state, userMatches: action.payload };
    case GET_MATCHES_FROM_EVENT:
      return { ...state, eventMatches: action.payload };
    case CREATE_MATCH:
      return { ...state, match: action.payload };
    default:
      return { ...state };
  }
};
export default MatchReducer;
