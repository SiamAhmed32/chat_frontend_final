import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userInfo") || "null")
      : null,
    isAuthenticated : typeof window !== "undefined" ? !!localStorage.getItem('userToken') : false
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials: (state, action:PayloadAction)
    }
})
