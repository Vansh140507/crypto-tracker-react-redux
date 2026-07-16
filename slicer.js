import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchdata = createAsyncThunk(
    'Coin/fetch',
    async (args,thunkAPI)=>{

        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${args}`)
            const data = await response.json()
            return data;

        }
        catch(error){
            return rejectWithValue(error.message);

        }

    }

 )
 


 const slicer1 = createSlice({
    name:'slice1',
    initialState: {data:[],loading: false ,error : null},
    reducers : {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchdata.pending,(state)=>{
            state.loading = true;
            state.error = null;


        })
        .addCase(fetchdata.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.loading = false;

        })
        .addCase(fetchdata.rejected,(state,action)=>{
            state.error = action.payload;
            state.loading = false;
            
        })
    }

 })

 export default slicer1.reducer;
