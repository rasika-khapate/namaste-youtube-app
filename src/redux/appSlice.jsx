import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    HideMenu: (state) => {
      state.isMenuOpen = false;
    },
    OpenMenu : (state) => {
      state.isMenuOpen = true;
    }
  },
});

export default appSlice.reducer;

export const { toggleMenu, HideMenu , OpenMenu } = appSlice.actions;
