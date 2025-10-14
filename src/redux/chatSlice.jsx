import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_LIMIT } from "../utils/Constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChatMessages: (state, action) => {
      // if(state.messages.length > 4){
      //   state.messages.pop()
      // }
      state.messages.splice(OFFSET_LIVE_LIMIT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;

export const { addChatMessages } = chatSlice.actions;
