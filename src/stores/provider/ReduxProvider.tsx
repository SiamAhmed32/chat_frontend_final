"use client";

import { store } from "../store";
import { Provider } from "react-redux";

// This is the TypeScript part. We are creating a Label (interface).

// children: This represents the rest of your app (the buttons, pages, and text).

// React.ReactNode: This is a rule that says: "The stuff inside this box can be anything—a single tag, many tags, or just plain text."

interface ClientProviderProps {
  children: React.ReactNode;
}

function ReduxProvider({ children }: ClientProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
