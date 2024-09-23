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
  comments: commentsReducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      commentsApi.middleware
    )
});

setupListeners(store.dispatch);

