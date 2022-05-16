import { GET_ALL_USERS } from "../types";

const iState = {
  users: [],
};

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload };
    default:
      return { ...state };
  }
};

export default UserReducer;
