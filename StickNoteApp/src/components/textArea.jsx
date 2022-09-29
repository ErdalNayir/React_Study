import React from "react";
import styles from "../main.module.css";
import { value } from "../Redux/stickers/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "../Redux/stickers/formSlice";

function TextArea() {
  const data = useSelector(value);
  const dispatch = useDispatch();

  function handleDesc(event) {
    dispatch(updateValue(event.target.value));
  }

  return (
    <textarea
      className={styles.textArea}
      placeholder="Eklemek istediğiniz notu girin..."
      onChange={handleDesc}
      value={data.value}
    ></textarea>
  );
}

export default TextArea;
