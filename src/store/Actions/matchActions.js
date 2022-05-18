import {
  GetMatchesByUserId,
  CreateMatch,
  GetMatchesByEventId,
} from "../../services/matchServices";
import {
  CREATE_MATCH,
  GET_MATCHES_FROM_USER,
  GET_MATCHES_FROM_EVENT,
} from "../types";

export const LoadMatchesByEvent = (eventId) => {
  return async (dispatch) => {
    try {
      const matches = await GetMatchesByEventId(eventId);
      dispatch({
        type: GET_MATCHES_FROM_EVENT,
        payload: matches,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadMatchesByUser = (userId, data) => {
  return async (dispatch) => {
    try {
      const matches = await GetMatchesByUserId(userId, data);
      dispatch({
        type: GET_MATCHES_FROM_USER,
        payload: matches,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const UploadNewMatch = (userId, eventId, data) => {
  return async (dispatch) => {
    try {
      const match = await CreateMatch(userId, eventId, data);
      dispatch({
        type: CREATE_MATCH,
        payload: match,
      });
    } catch (error) {
      throw error;
    }
  };
};
