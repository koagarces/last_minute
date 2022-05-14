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

export const GetEventById = async (id) => {
  try {
    const res = await Client.get(`/events/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetAllEventsFromUser = async (userId) => {
  try {
    const res = await Client.get(`/events/user/${userId}`);
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

export const DeleteEvent = async (id) => {
  try {
    await Client.delete(`/events/${id}`);
    console.log(`event with id ${id} deleted`);
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
