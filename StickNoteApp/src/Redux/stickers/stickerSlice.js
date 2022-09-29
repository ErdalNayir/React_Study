import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const stickerSlice = createSlice({
  name: "stickers",

  initialState: {
    sticks: [],
  },

  reducers: {
    addStickyNote: {
      reducer: (state, action) => {
        state.sticks.push(action.payload);
      },
      prepare: ({ description, color }) => {
        return {
          payload: {
            id: nanoid(),
            description,
            color,
          },
        };
      },
    },
    filterStickyNote: {
      reducer: (state, action) => {},
    },
  },
});

export const { addStickyNote } = stickerSlice.actions;
export default stickerSlice.reducer;
