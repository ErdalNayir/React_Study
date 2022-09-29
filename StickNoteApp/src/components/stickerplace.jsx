import React from "react";
import styles from "../main.module.css";
import StickerNote from "./stickernote";
import { useSelector } from "react-redux";
import { value } from "../Redux/stickers/formSlice";

function StickerPlace() {
  const sticks = useSelector((state) => state.stickers.sticks);
  const data = useSelector(value);

  return (
    <div className={styles.stickerPlace}>
      {sticks
        .filter((curr) => curr.description.includes(data.search))
        .map((sticks) => (
          <StickerNote
            key={sticks.id}
            desc={sticks.description}
            color={sticks.color}
          ></StickerNote>
        ))}
    </div>
  );
}

export default StickerPlace;
