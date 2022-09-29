import styles from "../main.module.css";
import React from "react";
import Header from "./header";
import FormPlace from "./form";
import Search from "./search";
import Contacts from "./contacts";

function Background() {
  return (
    <div className={styles.background}>
      <Header></Header>
      <Search></Search>
      <FormPlace></FormPlace>
      <Contacts></Contacts>
    </div>
  );
}

export default Background;
