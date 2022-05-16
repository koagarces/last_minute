import Client from "./";

export const GetMatchesByUserId = async (userId, data) => {
  try {
    const res = await Client.get(`/matches/user/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetMatchesByEventId = async (eventId) => {
  try {
    const res = await Client.get(`/matches/event/${eventId}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CreateMatch = async (userId, eventId, data) => {
  try {
    const res = await Client.post(`/matches/${userId}/${eventId}`, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
