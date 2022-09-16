import styles from "../styles/main.module.css";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";

import React from "react";

function OtherDetails({ data }) {
  const imgResult =
    typeof data["data"] != "undefined"
      ? data["data"][0]["uv"] > 8
        ? true
        : false
      : false;

  const windResult =
    typeof data["data"] != "undefined"
      ? data["data"][0]["wind_spd"] > 26
        ? true
        : false
      : false;

  const notifyUV = () =>
    toast.warn("Riskli UV değeri", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyWind = () =>
    toast.warn("Riskli rüzgar hızı", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className={styles.otherDetails}>
      <ToastContainer />
      <div className={styles.otherItem}>
        <font>Basınç(mb):</font>
        <span>
          {typeof data["data"] != "undefined" ? (
            data["data"][0]["pres"]
          ) : (
            <img
              className={styles.loadingGif}
              src={require("../assets/gifs/loading.gif")}
            ></img>
          )}
        </span>
      </div>
      <div className={styles.otherItem}>
        <font>Uv:</font>

        <span>
          {typeof data["data"] != "undefined" ? (
            data["data"][0]["uv"]
          ) : (
            <img
              className={styles.loadingGif}
              src={require("../assets/gifs/loading.gif")}
            ></img>
          )}
        </span>
        {imgResult ? (
          <img
            onClick={notifyUV}
            className={styles.warningImg}
            src={require("../assets/gifs/warning.gif")}
          ></img>
        ) : (
          ""
        )}
      </div>
      <div className={styles.otherItem}>
        <font>Rüzgar Hızı(m/s):</font>

        <span>
          {typeof data["data"] != "undefined" ? (
            data["data"][0]["wind_spd"]
          ) : (
            <img
              className={styles.loadingGif}
              src={require("../assets/gifs/loading.gif")}
            ></img>
          )}
        </span>
        {windResult ? (
          <img
            onClick={notifyWind}
            className={styles.warningImg}
            src={require("../assets/gifs/warning.gif")}
          ></img>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

OtherDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default OtherDetails;
