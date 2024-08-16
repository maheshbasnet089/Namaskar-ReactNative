import { createSlice } from "@reduxjs/toolkit";
import API from "../http";
import { RootState } from "@reduxjs/toolkit/query";

const userSlice = createSlice({
    name : 'user', 
    initialState : {
        currentUserData : {

        }, 
        token : null 
    }, 
    reducers : {
        setUser : (state,action)=>{
            state.currentUserData = action.payload
        }
    }
})

export const {setUser} = userSlice.actions 

export function registerUser(data){
    return async function registerUserThunk(){
        const response = await API.post('api/register',data)
        console.log(response)
    }
}

export default userSlice.reducer
