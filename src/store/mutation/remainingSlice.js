import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Login_show = createAsyncThunk(
  "login_show_s",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("Login_show", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// initialize userToken from local storage

const initialState = {
    login_show: false,

};

const remainingSlice = createSlice({
  name: "remaning",
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    // login user
    builder
    .addCase(Login_show.fulfilled, (state, action) => {
        state.login_show = action.payload;
      })
 

      
 
 
  },
});
// export default userSlice.reducer;


// export default userSlice.reducer;
export default remainingSlice.reducer;
