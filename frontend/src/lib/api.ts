import axios from "axios";
import { Inmates, Visitors, User } from "./type";
import { api } from "./axios";

//signin

export const signInPOST = async (data: User): Promise<User> => {
  const response = await axios.post("/api/v4/authentication/login", data);
  const userData = response.data;

  // Store the token in localStorage
  if (userData.token) {
    localStorage.setItem("token", userData.token);
  }

  if (userData.refreshToken) {
    localStorage.setItem("refreshToken", userData.refreshToken);
  }

  return userData;
};

//sign-up

export const signUpPOST = (data: User): Promise<User> =>
  axios.post("/api/v4/authentication/register", data).then((res) => res.data);

//Inmates

export const inmateGET = (): Promise<Inmates[]> =>
  api.get("/api/v2/inmate").then((res) => res.data);

export const inmatePOST = (data: Inmates): Promise<Inmates> =>
  api.post("/api/v2/inmate", data).then((res) => res.data);

//Visitors

export const visitorGET = (): Promise<Visitors[]> =>
  api.get("/api/v3/visitors").then((res) => res.data);

export const visitorPOST = (data: Visitors): Promise<Visitors> =>
  api.post("/api/v3/visitors", data).then((res) => res.data);
