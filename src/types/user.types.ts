import { Status } from "./global"

export enum Role{
    Seller = 'seller', 
    Consumer = 'consumer'
}

export interface UserData{
    firstName : string, 
    lastName: string, 
    email : string, 
    address : string, 
    password : string, 
    role : Role
}

export interface AuthState{
    currentUserData :UserData , 
    token : string | null, 
    status : Status
}