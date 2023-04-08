import instance from ".";
import { LoginForm, SignupForm, UserForm } from "../interfaces/schemas";

export const signup = (data: SignupForm) => {
  return instance.post("/signup", data);
};

export const login = (data: LoginForm) => {
  return instance.post("signin", data);
};

export const getUsers = () => {
  return instance.get("/users");
};

export const getUserByID = (id: string | number) => {
  return instance.get(`/users/${id}`);
};

export const updateUser = (id: number | string, data: UserForm) => {
  return instance.patch(`/users/${id}`, data);
};
export const removeUser = (id: number | string) => {
  return instance.delete(`/users/${id}`);
};
