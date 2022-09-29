import { configureStore } from "@reduxjs/toolkit";
import stickerSlice from "./stickers/stickerSlice";
import formSlice from "./stickers/formSlice";

export const store = configureStore({
  reducer: {
    stickers: stickerSlice,
    forms: formSlice,
  },
});
