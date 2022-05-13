import Client from "./";

export const GetMatchesByUserId = async (userId, data) => {
  try {
    const res = await Client.get(`/matches/${userId}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetMatchesByEventId = async (eventId, data) => {
  try {
    const res = await Client.get(`/matches/${eventId}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CreateMatch = async (userId, eventId, data) => {
  try {
    const res = await Client.post(`/matches/${userId}/${eventId}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
