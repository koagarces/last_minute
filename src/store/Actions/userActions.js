import { GET_ALL_USERS } from "../types";
import { getAllUsers } from "../../services/userServices";

export const LoadAllUsers = () => {
  return async (dispatch) => {
    try {
      const users = await getAllUsers();
      dispatch({
        type: GET_ALL_USERS,
        payload: users,
      });
    } catch (error) {
      throw error;
    }
  };
};
