import { GetMatchesByUserId, CreateMatch } from "../../services/matchServices";
import { CREATE_MATCH, GET_MATCHES_FROM_USER } from "../types";

export const LoadMatchesByUser = (userId) => {
  return async (dispatch) => {
    try {
      const matches = await GetMatchesByUserId(userId);
      dispatch({
        type: GET_MATCHES_FROM_USER,
        payload: matches,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const UploadNewMatch = (userId, eventId) => {
  return async (dispatch) => {
    try {
      const match = await CreateMatch(userId, eventId);
      dispatch({
        type: CREATE_MATCH,
        payload: match,
      });
    } catch (error) {
      throw error;
    }
  };
};
