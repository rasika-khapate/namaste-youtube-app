import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/appSlice";
import searchSlice from "../redux/searchSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});

export default appStore;
