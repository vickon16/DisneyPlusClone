import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  displayName : null,
  email : null,
  photoURL : null,
};

const userSlice = createSlice({
  name : "user",
  initialState,
  reducers : {
    setUserState : (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
    },
    setSignOut : (state) => {
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
    }
  },
})

export const {setUserState, setSignOut} = userSlice.actions;

export default userSlice.reducer;