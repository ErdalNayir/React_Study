import React from "react";
import TextArea from "./textArea";
import styles from "../main.module.css";
import RadioButtons from "./radioButtons";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { value } from "../Redux/stickers/formSlice";
import { useDispatch } from "react-redux";
import { addStickyNote } from "../Redux/stickers/stickerSlice";
import { updateValue, updateColor } from "../Redux/stickers/formSlice";

function FormPlace() {
  const data = useSelector(value);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    if (data.value.length === 0 || data.color.length === 0) {
      toast.error("Yapışkan not için metin ve renk giriniz");
      return false;
    }
    dispatch(addStickyNote({ description: data.value, color: data.color }));
    dispatch(updateValue(""));
    dispatch(updateColor(""));
  }

  return (
    <form className={styles.fromPlace} onSubmit={handleSubmit}>
      {/* Same as */}
      <TextArea></TextArea>
      <div className={styles.formElements}>
        <RadioButtons></RadioButtons>
        <button role={"submit"} className={styles.addButton}>
          Ekle
        </button>
      </div>
    </form>
  );
}

export default FormPlace;
