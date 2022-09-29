import React from "react";
import { useSelector } from "react-redux";
import { value } from "../Redux/stickers/formSlice";
import { useDispatch } from "react-redux";
import { updateColor } from "../Redux/stickers/formSlice";

function RadioButtons() {
  const data = useSelector(value);
  const dispatch = useDispatch();

  function handleRadio(event) {
    dispatch(updateColor(event.target.value));
  }
  // console.log(data);
  return (
    <div>
      <input
        className="radioButtonRed"
        type="radio"
        name="color"
        value="red"
        onClick={handleRadio}
        checked={data.color === "red" ? true : false}
        onChange={() => {}}
      />
      <input
        className="radioButtonPurple"
        type="radio"
        name="color"
        value="purple"
        onClick={handleRadio}
        checked={data.color === "purple" ? true : false}
        onChange={() => {}}
      />
      <input
        className="radioButtonYellow"
        type="radio"
        name="color"
        value="yellow"
        onClick={handleRadio}
        checked={data.color === "yellow" || "" ? true : false}
        onChange={() => {}}
      />
      <input
        className="radioButtonBlue"
        type="radio"
        name="color"
        value="blue"
        onClick={handleRadio}
        checked={data.color === "blue" ? true : false}
        onChange={() => {}}
      />
      <input
        className="radioButtonGreen"
        type="radio"
        name="color"
        value="green"
        onClick={handleRadio}
        checked={data.color === "green" ? true : false}
        onChange={() => {}}
      />
    </div>
  );
}

export default RadioButtons;
