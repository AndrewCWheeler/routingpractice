import React from "react";

const WordNum = (props) => {
  return (
    <div>
      {isNaN(+props.wordnum) ? (
        <h1>The word is: {props.wordnum}</h1>
      ) : (
        <h1>The number is: {props.wordnum}</h1>
      )}
    </div>
  );
};

export default WordNum;
