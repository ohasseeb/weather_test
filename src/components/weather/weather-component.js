import React from "react";

export const Weather = (props) => {
  return (
    <div>
      <label className="weatherLabel">{props.fieldName} </label>
      <span> : {props.fieldValue ? props.fieldValue : " "} </span>
      <br />
      {props.fieldImage}
    </div>
  );
};
