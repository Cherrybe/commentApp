import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import commentsReducer from "./features/comments/commentsSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { commentsApi } from "../services/coments";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Root reducer combining different slices
const rootReducer = combineReducers({
  comments: commentsReducer, // Add more reducers here as your app grows
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      commentsApi.middleware
    )
});

setupListeners(store.dispatch);

