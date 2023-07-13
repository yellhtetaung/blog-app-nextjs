import { axiosInstance } from "@/utils/axiosInstance";

export const createUser = async ({ name, email, password }) => {
  try {
    const res = await axiosInstance.post("/users", {
      name,
      email,
      password,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const res = await axiosInstance.post("/login", { email, password });
    return res.data;
  } catch (error) {
    throw error;
  }
};
