import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/appSlice";
import searchSlice from "../redux/searchSlice";
import chatSlice from "../redux/chatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default appStore;
