import React from "react";

const Color = (props) => {
  return (
    <div>
      <h1 style={{ color: props.textColor, backgroundColor: props.bgColor }}>
        The word is: {props.word}
      </h1>
    </div>
  );
};

export default Color;
