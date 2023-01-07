export interface User {
    id :number,
    name :string,
    role : userRole,
    avatar :string,
    email :string,
    password :string
}

export interface CreateUser{
    name:string,
    role:userRole,
    email: string,
    password :string,
    avatar :string

}

export type userRole = "customer" | "admin";