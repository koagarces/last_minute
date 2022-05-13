import Client from "./";

export const GetEvents = async () => {
  try {
    const res = await Client.get(`/events`);
    console.log(res);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetEventById = async (id, data) => {
  try {
    const res = await Client.get(`/events/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CreateEvent = async (userId, data) => {
  try {
    const res = await Client.post(`/events/${userId}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteEvent = async (userId, id, data) => {
  try {
    await Client.delete(`/events/${userId}/${id}`);
    console.log("event deleted");
  } catch (error) {
    throw error;
  }
};

export const UpdateEvent = async (userId, id, data) => {
  try {
    const res = await Client.put(`/events/${userId}/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
