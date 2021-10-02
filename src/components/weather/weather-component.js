import React from "react";

export const Weather = (props) => {
  console.log("Props", props);
  return (
    <div>
      {props.fieldName}: {props.fieldValue ? props.fieldValue : " "}
    </div>
  );
};
