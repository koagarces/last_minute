const { GET_EVENTS, GET_SINGLE_EVENT } = require("../types");

const iState = {
  events: [],
  event: {},
};

const EventReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, events: action.payload };
    case GET_SINGLE_EVENT:
      return { ...state, event: action.payload };
    default:
      return { ...state };
  }
};
export default EventReducer;
