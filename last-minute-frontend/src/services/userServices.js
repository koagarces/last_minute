import Client from "./";

export const SignInUser = async (data) => {
  try {
    const res = await Client.post("/users/login", data);
    localStorage.setItem("token", res.data.token);
    return res.data.user;
  } catch (error) {
    throw error;
  }
};

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post(`/users/register/`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CheckSession = async () => {
  try {
    const res = await Client.get("/users/session");
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const res = await Client.get(`/users/session/${id}`);
    console.log(res.data, "get user log");
    return res.data;
  } catch (error) {
    throw error;
  }
};
