import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  loadDrugByID:[],
  loadLookupsByID:[]
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (state,action) => {
    const requestOptions = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer '+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjQ0NDA0MDI1LCJleHAiOjE2NDQ0MDU4MjUsImlhdCI6MTY0NDQwNDAyNX0.R4cNLzAtXxpjE30shFZADSyOAU-rgygN3nc5Tz_Ot9o"
      }
  };

  let data=await fetch('https://apigateway-dev.azurewebsites.net/LoadFormularyDrugs?PageNo=1&PageSize=20&MedicineName=', requestOptions)
  data=await data.text();
  // action.payload.loadDrugByID=data
              return data
  }
  
);
export const loadDrugByID = createAsyncThunk(
  'counter/fetchCount',
  async (ID) => {
    console.log("statee:",ID)
    const requestOptions = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer '+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjQ0NDA0MDI1LCJleHAiOjE2NDQ0MDU4MjUsImlhdCI6MTY0NDQwNDAyNX0.R4cNLzAtXxpjE30shFZADSyOAU-rgygN3nc5Tz_Ot9o"
      }
  };

  let data=await fetch('https://apigateway-dev.azurewebsites.net/LoadFormularyDrugByID?DrugID='+ID, requestOptions)
  data=await data.text();
            
              return data
  }
  
);
export const loadLookupsByID = createAsyncThunk(
  'counter/fetchCount',
  async (ID) => {
    console.log("statee:",ID)
    const requestOptions = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer '+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjQ0NDA0MDI1LCJleHAiOjE2NDQ0MDU4MjUsImlhdCI6MTY0NDQwNDAyNX0.R4cNLzAtXxpjE30shFZADSyOAU-rgygN3nc5Tz_Ot9o"
      }
  };

  let data=await fetch("https://apigateway-dev.azurewebsites.net/LoadFormularyLookups?DrugID="+ID+"&IsSystem=0", requestOptions)
  data=await data.text();
            
              return data
  }
  
);
export const formularySlice = createSlice({
  name: 'formulary',
  initialState,
  reducers: {
    get:async (state,action)=>{
      return incrementAsync(state)
    }
  }
});

export const { get } = formularySlice.actions;


export default formularySlice.reducer;
