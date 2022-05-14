import {
  GetEvents,
  GetEventById,
  GetAllEventsFromUser,
  UpdateEvent,
} from "../../services/eventServices";
import {
  GET_EVENTS,
  GET_SINGLE_EVENT,
  GET_EVENTS_FROM_USER,
  UPDATE_EVENT,
} from "../types";

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

export const UpdateAnEvent = (userId, id, data) => {
  return async (dispatch) => {
    try {
      const event = await UpdateEvent(userId, id, data);
      dispatch({
        type: UPDATE_EVENT,
        payload: event,
      });
    } catch (error) {
      throw error;
    }
  };
};
