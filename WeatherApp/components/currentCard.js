import React from "react";
import { getImages } from "../helpers/weatherHelpers";
import styles from "../styles/main.module.css";
import PropTypes from "prop-types";

function CurrentCard({ data }) {
  return (
    <div className={styles.currentTemp}>
      <img
        src={getImages(
          typeof data["data"] != "undefined"
            ? data["data"][0]["weather"]["code"]
            : 803
        )}
        className={styles.currentImg}
      ></img>

      <div className={styles.temps}>
        <div className={styles.today}>Bugün</div>

        <div className={styles.nowTemp}>
          {typeof data["data"] != "undefined" ? (
            data["data"][0]["temp"]
          ) : (
            <img
              className={styles.loadingGif}
              src={require("../assets/gifs/loading.gif")}
            ></img>
          )}
          &deg;
        </div>
      </div>
    </div>
  );
}
CurrentCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CurrentCard;
