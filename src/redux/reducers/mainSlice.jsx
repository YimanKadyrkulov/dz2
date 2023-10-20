import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    number: 1,
    usersArr: []
}


export const asyncGetUsers = createAsyncThunk(
    'mainSlice/asyncGetUsers', async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            console.log(response)
            if (response?.status === 200) return response?.data
        }
        catch (e) {
            console.log(e)
        }
    }
)


const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        setNumber: (state, action) => {
            state.number = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncGetUsers.fulfilled, (state, action) => {
            state.usersArr = action.payload
        })
    }
})

export const {
    setNumber
} = mainSlice.actions

export default mainSlice.reducer