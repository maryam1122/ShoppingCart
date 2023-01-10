import { Url } from "url";

export interface User {
  id: number;
  name: string;
  role: UserRole;
  avatar: string;
  email: string;
  password: string;
}
export interface UserInitialState {
  userList: User[];
  currentUser?: User;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
}
export interface UserLogin {
  email: string;
  password: string;
}
export interface UserloginResponse {
  access_token: string;
  refresh_token: string;
}
export interface UserReducerType {
  user: User;
  loginResponse: UserloginResponse;
}
export interface CreateUserForm {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserWithFile {
  image: FileList;
  user: CreateUserForm;
}

export type UserRole = "customer" | "admin";
