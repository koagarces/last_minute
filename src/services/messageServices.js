import Client from "./";

export const GetMessagesByMatchId = async (matchId) => {
  try {
    const res = await Client.get(`/messages/${matchId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CreateMessage = async (userId, matchId, data) => {
  try {
    const res = await Client.post(`/messages/${userId}/${matchId}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
