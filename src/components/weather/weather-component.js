import React from "react";

const displayWeatherIcon = (fieldValue) => {
  if (fieldValue == "Clear") {
    console.log("Line 5 True");
    return true;
  } else {
    return false;
  }
};

export const Weather = (props) => {
  if (displayWeatherIcon(props.fieldValue) == true) {
    console.log("WEATHER ICON 14");
  }
  return (
    <div>
      {props.fieldName}: {props.fieldValue ? props.fieldValue : " "}
      {props.fieldImage}
    </div>
  );
};
