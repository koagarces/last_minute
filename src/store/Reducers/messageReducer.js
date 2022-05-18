import { GET_ALL_MESSAGES, CREATE_MESSAGE } from "../types";

const iState = {
  messages: [],
  message: {},
};

const MessageReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      return { ...state, messages: action.payload };
    case CREATE_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return { ...state };
  }
};

export default MessageReducer;
