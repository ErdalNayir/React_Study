import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../styles/stickerStyle.module.css";
import Draggable from "react-draggable";
import StickerPlace from "./stickerplace";

function StickerNote({ color, desc }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ top: 30 + "%", left: 40 + "%" });
  const [shape, setShape] = useState(false);

  useEffect(() => {
    function handleMouseDown(event) {
      setShape(true);
    }

    function handleMouseUp(event) {
      setShape(false);
    }

    const element = ref.current;

    element.addEventListener("mousedown", handleMouseDown);
    element.addEventListener("mouseup", handleMouseUp);

    return () => {
      element.removeEventListener("mousedown", handleMouseDown);
      element.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <Draggable bounds="parent">
      <div
        className={styles.sticky_container}
        style={{
          top: position.top,
          left: position.left,
        }}
        ref={ref}
      >
        <div className={styles.sticky_outer}>
          <div className={shape ? styles.sticky : styles.sticky_two}>
            <svg width="0" height="0">
              <defs>
                <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                  <path
                    d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                    strokeLinejoin="round"
                    strokeLinecap="square"
                  />
                </clipPath>
              </defs>
            </svg>
            <div
              className={
                shape ? styles.sticky_content : styles.sticky_content_two
              }
              ref={ref}
              style={{
                backgroundColor:
                  color === "red"
                    ? "#f06292"
                    : color === "green"
                    ? "#aed581"
                    : color === "purple"
                    ? "#ba68c8"
                    : color === "blue"
                    ? "#4fc3f7"
                    : color === "yellow"
                    ? "#ffd54f"
                    : "#ffd54f",
              }}
            >
              {desc}
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

StickerNote.propTypes = {
  desc: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default StickerNote;
