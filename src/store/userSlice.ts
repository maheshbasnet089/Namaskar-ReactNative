import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import API from "../http";
import { RootState } from "@reduxjs/toolkit/query";
import { AppDispatch } from "./store";
import { AuthState, UserData } from "../types/user.types";
import { Status } from "../types/global";



const initialState:AuthState = {
    currentUserData : {} as UserData, 
    token : null, 
    status : Status.Loading
}

const userSlice = createSlice({
    name : 'user', 
    initialState : initialState, 
    reducers : {
        setUser : (state:AuthState,action:PayloadAction<UserData>)=>{
            state.currentUserData = action.payload
        }, 
        setStatus : (state:AuthState,action:PayloadAction<Status>)=>{
            state.status = action.payload
        }
    }
})

export const {setUser,setStatus} = userSlice.actions 

export function registerUser(data:UserData){
    return async function registerUserThunk(dispatch:AppDispatch){
        try {
        const response = await API.post('api/register',data)
        if(response.status == 200){
         dispatch(setStatus(Status.Success))
        }else{
            dispatch(setStatus(Status.Error))
        }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.Error))
        }
    }
}

export default userSlice.reducer
