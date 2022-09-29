import React from "react";
import styles from "../main.module.css";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div
        className={styles.author}
        onClick={() => (window.location = "https://github.com/ErdalNayir")}
      >
        Made by Erdal Nayir
      </div>
      <div className={styles.icons}>
        <IconButton
          href="https://www.linkedin.com/in/erdal-nayir-9754281b1/"
          target={"_blank"}
        >
          <LinkedInIcon
            sx={{ width: "60px", height: "60px", color: "#0A66C2" }}
          ></LinkedInIcon>
        </IconButton>
        <IconButton href="https://github.com/ErdalNayir" target={"_blank"}>
          <GitHubIcon
            sx={{ width: "60px", height: "60px", color: " #24292F" }}
          ></GitHubIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Contacts;
