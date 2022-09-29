import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "formDatas",

  initialState: {
    data: {
      value: "",
      search: "",
      color: "",
    },
  },

  reducers: {
    updateValue: {
      reducer: (state, action) => {
        state.data.value = action.payload;
      },
      //   prepare: () => {},
    },
    updateSearch: {
      reducer: (state, action) => {
        state.data.search = action.payload;
      },
      //   prepare: () => {},
    },
    updateColor: {
      reducer: (state, action) => {
        state.data.color = action.payload;
      },
      //   prepare: () => {},
    },
  },
});

export const value = (state) => state.forms.data;
export const { updateValue, updateSearch, updateColor } = formSlice.actions;
export default formSlice.reducer;
