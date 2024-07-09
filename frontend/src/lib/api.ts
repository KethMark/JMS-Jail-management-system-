import axios from 'axios'
import { Inmates, Visitors, User } from './type'

//signin

export const signInPOST = (data: User): Promise<User> =>
    axios.post("/api/v4/authentication/login", data).then((res) => res.data)

//sign-up

export const signUpPOST = (data: User): Promise<User> =>
    axios.post("/api/v4/authentication/register", data).then((res) => res.data)

//Inmates

export const inmateGET = (): Promise<Inmates[]> =>
    axios.get("/api/v2/inmate").then((res) => res.data)

export const inmatePOST = (data: Inmates): Promise<Inmates> =>
    axios.post("/api/v2/inmate", data).then((res) => res.data)

//Visitors

export const visitorGET = (): Promise<Visitors[]> => 
    axios.get("/api/v3/visitors").then((res) => res.data)

export const visitorPOST = (data: Visitors): Promise<Visitors> =>
    axios.post("/api/v3/visitors", data).then((res) => res.data)