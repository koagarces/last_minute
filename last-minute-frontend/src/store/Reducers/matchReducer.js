const { GET_MATCHES_FROM_USER, CREATE_MATCH } = require("../types");

const iState = {
  matches: [],
  match: {},
};

const MatchReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MATCHES_FROM_USER:
      return { ...state, matches: action.payload };
    case CREATE_MATCH:
      return { ...state, match: action.payload };
    default:
      return { ...state };
  }
};
export default MatchReducer;
