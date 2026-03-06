import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null; // can be any data of user(name, email) | null(nobody is logged in)
  isAuthenticated: boolean; //someone is logged in or not(true|false)
}

const getSafeUser = () => {
  if (typeof window === "undefined") return null;
  const storedUser = localStorage.getItem("userInfo");
  // Check if it's null, empty, or the literal string "undefined"
  if (!storedUser || storedUser === "undefined") return null;

  try {
    return JSON.parse(storedUser);
  } catch (error) {
    console.error("Local storage user info is corrupted", error);
    return null;
  }
};

const initialState: AuthState = {
  user: getSafeUser(),

  isAuthenticated:
    typeof window !== "undefined" ? !!localStorage.getItem("userToken") : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<any>) => {
      //result
      state.user = action.payload;

      state.isAuthenticated = true; // ← hardcoded true, NOT from payload
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
