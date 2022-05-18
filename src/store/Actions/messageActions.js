import {
  GetMessagesByMatchId,
  CreateMessage,
} from "../../services/messageServices";
import { GET_ALL_MESSAGES, CREATE_MATCH } from "../types";

export const LoadAllMessages = (matchId) => {
  return async (dispatch) => {
    try {
      const messages = await GetMessagesByMatchId(matchId);
      dispatch({
        type: GET_ALL_MESSAGES,
        payload: messages,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const UploadNewMessage = (matchId, data) => {
  return async (dispatch) => {
    try {
      const message = await CreateMessage(matchId, data);
      dispatch({
        type: CREATE_MATCH,
        payload: message,
      });
    } catch (error) {
      throw error;
    }
  };
};
