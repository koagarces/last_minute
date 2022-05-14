const {
  GET_EVENTS,
  GET_SINGLE_EVENT,
  GET_EVENTS_FROM_USER,
} = require("../types");

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
    case GET_EVENTS_FROM_USER:
      return { ...state, events: action.payload };
    default:
      return { ...state };
  }
};
export default EventReducer;
