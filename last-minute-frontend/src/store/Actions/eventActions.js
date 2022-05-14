import {
  GetEvents,
  GetEventById,
  GetAllEventsFromUser,
} from "../../services/eventServices";
import { GET_EVENTS, GET_SINGLE_EVENT, GET_EVENTS_FROM_USER } from "../types";

export const LoadEvents = () => {
  return async (dispatch) => {
    try {
      const events = await GetEvents();
      dispatch({
        type: GET_EVENTS,
        payload: events,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadAllUserEvents = (userId) => {
  return async (dispatch) => {
    try {
      const events = await GetAllEventsFromUser(userId);
      dispatch({
        type: GET_EVENTS_FROM_USER,
        payload: events,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadSingleEvent = (id) => {
  return async (dispatch) => {
    try {
      const event = await GetEventById(id);
      dispatch({
        type: GET_SINGLE_EVENT,
        payload: event,
      });
    } catch (error) {
      throw error;
    }
  };
};
