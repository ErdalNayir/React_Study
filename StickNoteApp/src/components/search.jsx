import React from "react";
import styles from "../main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { value } from "../Redux/stickers/formSlice";
import { updateSearch } from "../Redux/stickers/formSlice";

function Search() {
  const data = useSelector(value);
  const dispatch = useDispatch();

  function handleFilterChange(event) {
    dispatch(updateSearch(event.target.value));
  }

  return (
    <input
      className={styles.search}
      placeholder="Ara..."
      value={data.search}
      onChange={handleFilterChange}
    ></input>
  );
}

export default Search;
